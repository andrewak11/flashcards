# 🇩🇪 Angular German Flashcards Web App

A lightweight, modern flashcard web application built with **Angular (Standalone Components & Signals)** designed to help learners master German vocabulary, grammatical genders (*der*, *die*, *das*), plurals, and parts of speech.

---

## ✨ Features

- **⚡ Modern Angular Architecture:** Built using Standalone Components, Angular Signals, and computed state for optimal reactivity and performance.
- **📁 Automatic CSV Loading:** Automatically parses vocabulary from a local CSV file on load using `PapaParse` and `HttpClient`.
- **🃏 3D Animated Flip Cards:** Smooth CSS 3D perspective flip animations to reveal German translations, articles, and example sentences.
- **🎨 Color-Coded Grammatical Genders:** Instant visual cues for German noun articles:
<<<<<<< HEAD
  - <span style="color:#2563eb; font-weight:bold;">der (Masculine)</span> → Blue
  - <span style="color:#db2777; font-weight:bold;">die (Feminine & Plural)</span> → Pink
  - <span style="color:#16a34a; font-weight:bold;">das (Neuter)</span> → Green
=======
  - `der` (Masculine) → Blue
  - `die` (Feminine & Plural) → Pink
  - `das` (Neuter) → Green
>>>>>>> c8136a5 (minor changes)
- **🔊 Native German Pronunciation:** Integrated Web Speech API (`SpeechSynthesisUtterance`) targeting native German (`de-DE`) voices with pitch and rate adjustments for both words and full example sentences.
- **🏷️ Part-of-Speech Filtering:** Filter practice decks on the fly by category: *All*, *Nouns*, *Verbs*, *Adjectives*, and *Phrases*.
- **✍️ Spell-Check Practice Mode:** Toggleable practice mode that validates German spelling (with or without articles) and provides instant visual feedback.
- **📤 Custom CSV Import:** Upload your own CSV vocabulary lists directly from the browser.
<<<<<<< HEAD

---

## 🛠️ Tech Stack

- **Framework:** [Angular](https://angular.dev/) (Standalone Components, Signals)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Custom 3D transforms & responsive flexbox)
- **CSV Parsing:** [PapaParse](https://www.papaparse.com/)
- **Audio:** Web Speech API (`window.speechSynthesis`)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended, v18+ / v20+)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/german-flashcards-angular.git](https://github.com/your-username/german-flashcards-angular.git)
   cd german-flashcards-angular
=======

---

## 🛠️ Tech Stack

- **Framework:** [Angular](https://angular.dev/) (Standalone Components, Signals)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Custom 3D transforms & responsive flexbox)
- **CSV Parsing:** [PapaParse](https://www.papaparse.com/)
- **Audio:** Web Speech API (`window.speechSynthesis`)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended, v18+ / v20+)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/german-flashcards-angular.git
   cd german-flashcards-angular
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm install papaparse
   npm install --save-dev @types/papaparse
   ```

3. **Verify Asset Location:**
   Place your `german_flashcards.csv` inside:
   - `public/` (Angular 18+)
   - *or* `src/assets/` (Angular 17 and earlier)

4. **Start the development server:**
   ```bash
   ng serve
   ```

5. **Open in Browser:**
   Navigate to `http://localhost:4200/`.

---

## 📄 CSV File Structure

The app reads vocabulary directly from a standard `.csv` file. You can create or edit your own deck following this structure:

```csv
german,english,type,gender,example
Hund,dog,Noun,der,Der Hund bellt im Garten.
Hunde,dogs (plural),Noun,die,Die Hunde spielen im Park.
Katze,cat,Noun,die,Die Katze schläft auf dem Sofa.
Haus,house,Noun,das,Das Haus ist sehr alt und groß.
laufen,to run / walk,Verb,,Wir laufen jeden Tag.
schnell,fast / quick,Adjective,,Das Auto fährt sehr schnell.
Guten Tag!,Good day / Hello!,Phrase,,Guten Tag, wie kann ich Ihnen helfen?
```

### Supported Columns

| Column | Required | Allowed Values / Description |
| :--- | :---: | :--- |
| `german` | **Yes** | German word or phrase (*e.g., Hund, laufen*) |
| `english` | **Yes** | English translation (*e.g., dog, to run*) |
| `type` | **Yes** | `Noun`, `Verb`, `Adjective`, or `Phrase` |
| `gender` | No | `der`, `die`, or `das` (typically for Nouns) |
| `example` | No | Full contextual German example sentence |

---

## 🎯 Usage Guide

1. **Study Mode (Default):**
   - View the English prompt on the front of the card.
   - Click anywhere on the card to flip and reveal the German word, its gender article, and an example sentence.
   - Click the **🔊** icon on the back to hear native German pronunciation.

2. **Spell-Check Mode:**
   - Toggle **✍️ Spell Check Mode** at the top.
   - Type the German spelling into the input field and press `Enter` or click **Check**.
   - The field automatically resets when moving to the next card.

3. **Filtering:**
   - Click any category pill (*Noun*, *Verb*, *Adjective*, *Phrase*) to narrow down your study deck.

---

## 🔮 Roadmap Ideas

- [ ] Spaced Repetition System (Leitner 5-box algorithm)
- [ ] LocalStorage progress tracking and streak counters
- [ ] Timed multiple-choice quiz mode
- [ ] Keyboard navigation shortcuts (`Space` to flip, `Arrow` keys for next/prev)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
>>>>>>> c8136a5 (minor changes)
