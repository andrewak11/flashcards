import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as Papa from 'papaparse';

export interface Flashcard {
  id: number;
  german: string;
  english: string;
  type: 'Noun' | 'Verb' | 'Adjective' | 'Phrase';
  gender?: 'der' | 'die' | 'das';
  example?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);

  // --- State Signals ---
  cards = signal<Flashcard[]>([]);
  currentIndex = signal<number>(0);
  isFlipped = signal<boolean>(false);
  isLoading = signal<boolean>(true);

  // Filter State ('All' | 'Noun' | 'Verb' | 'Adjective' | 'Phrase')
  selectedFilter = signal<string>('All');
  readonly filterOptions = ['All', 'Noun', 'Verb', 'Adjective', 'Phrase'];

  // --- Spelling Mode State ---
  isTypingMode = signal<boolean>(false);
  userGuess = signal<string>('');
  checkResult = signal<'idle' | 'correct' | 'wrong'>('idle');

  // --- Computed Signals ---
  filteredCards = computed(() => {
    const filter = this.selectedFilter();
    const all = this.cards();
    if (filter === 'All') {
      return all;
    }
    return all.filter(c => c.type.toLowerCase() === filter.toLowerCase());
  });

  // --- Computed Properties ---
  currentCard = computed(() => this.filteredCards()[this.currentIndex()]);
  totalCards = computed(() => this.filteredCards().length);

private germanVoice: SpeechSynthesisVoice | null = null;

  ngOnInit() {
    this.loadFlashcardsFromCSV();
    this.initGermanVoices();
  }
  
  // Load initial CSV file from assets
  loadFlashcardsFromCSV() {
    this.http.get('german_flashcards.csv', { responseType: 'text' }).subscribe({
      next: (csvData) => {
        this.parseAndSetCards(csvData);
      },
      error: (err) => {
        console.error('Error loading default CSV file:', err);
        this.isLoading.set(false);
      }
    });
  }
  // --- Filter Handling ---
  setFilter(filter: string): void {
    this.selectedFilter.set(filter);
    this.currentIndex.set(0);
    this.isFlipped.set(false);
    this.resetInput()
  }
  // Handle local CSV file upload
  onFileUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      this.isLoading.set(true);
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const csvText = e.target?.result as string;
        this.parseAndSetCards(csvText);
      };

      reader.readAsText(file);
    }
  }

  // Helper method to parse CSV text with PapaParse
  private parseAndSetCards(csvText: string) {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedCards: Flashcard[] = result.data.map((row: any, index: number) => ({
          id: index + 1,
          german: row.german,
          english: row.english,
          type: row.type,
          gender: row.gender ? row.gender : undefined,
          example: row.example ? row.example : undefined
        }));

        this.cards.set(parsedCards);
        this.currentIndex.set(0);
        this.isFlipped.set(false);
        this.isLoading.set(false);
      }
    });
  }

  // --- Card Controls ---
  flipCard() {
    if (this.totalCards() === 0) return;
    this.isFlipped.update(v => !v);
  }

  nextCard() {
    if (this.currentIndex() < this.cards().length - 1) {
      this.isFlipped.set(false);
      this.currentIndex.update(i => i + 1);
      this.resetInput()
    }
  }

  prevCard() {
    if (this.currentIndex() > 0) {
      this.isFlipped.set(false);
      this.currentIndex.update(i => i - 1);
      this.resetInput()
    }
  }

  private initGermanVoices(): void {
  if (!('speechSynthesis' in window)) return;

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural/online voices, then any de-DE voice, then any German voice
    this.germanVoice = 
      voices.find(v => v.lang === 'de-DE' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'))) ||
      voices.find(v => v.lang === 'de-DE') ||
      voices.find(v => v.lang.startsWith('de')) ||
      null;
  };

  loadVoices();
  // Chrome & Edge load voices asynchronously:
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

  speakGerman(text: string, event?: MouseEvent): void {
  if (event) {
    event.stopPropagation(); // Prevents the card flip trigger
  }

  if (!('speechSynthesis' in window)) {
    alert('Sorry, your browser does not support speech synthesis.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE'; // Set language to German
  utterance.rate = 0.85;     // Slightly slower speed for clearer learning

  window.speechSynthesis.speak(utterance);
}
// --- Spelling Mode Actions ---
  toggleTypingMode(): void {
    this.isTypingMode.update(v => !v);
    this.resetInput();
  }

  checkAnswer(): void {
    const card = this.currentCard();
    if (!card) return;

    const sanitize = (text: string) => text.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    const user = sanitize(this.userGuess());

    const rawGerman = sanitize(card.german);
    const germanWithGender = card.gender ? `${card.gender} ${rawGerman}`.toLowerCase() : rawGerman;

    // Checks match with or without the article
    if (user === rawGerman || user === germanWithGender) {
      this.checkResult.set('correct');
    } else {
      this.checkResult.set('wrong');
    }
  }

  private resetInput(): void {
    this.userGuess.set('');
    this.checkResult.set('idle');
  }

}



