# 🇩🇪 Angular German Flashcards Web App

A lightweight, modern flashcard web application built with **Angular (Standalone Components & Signals)** designed to help learners master German vocabulary, grammatical genders (*der*, *die*, *das*), plurals, and parts of speech.

---

## ✨ Features

- **⚡ Modern Angular Architecture:** Built using Standalone Components, Angular Signals, and computed state for optimal reactivity and performance.
- **📁 Automatic CSV Loading:** Automatically parses vocabulary from a local CSV file on load using `PapaParse` and `HttpClient`.
- **🃏 3D Animated Flip Cards:** Smooth CSS 3D perspective flip animations to reveal German translations, articles, and example sentences.
- **🎨 Color-Coded Grammatical Genders:** Instant visual cues for German noun articles:
  - <span style="color:#2563eb; font-weight:bold;">der (Masculine)</span> → Blue
  - <span style="color:#db2777; font-weight:bold;">die (Feminine & Plural)</span> → Pink
  - <span style="color:#16a34a; font-weight:bold;">das (Neuter)</span> → Green
- **🔊 Native German Pronunciation:** Integrated Web Speech API (`SpeechSynthesisUtterance`) targeting native German (`de-DE`) voices with pitch and rate adjustments for both words and full example sentences.
- **🏷️ Part-of-Speech Filtering:** Filter practice decks on the fly by category: *All*, *Nouns*, *Verbs*, *Adjectives*, and *Phrases*.
- **✍️ Spell-Check Practice Mode:** Toggleable practice mode that validates German spelling (with or without articles) and provides instant visual feedback.
- **📤 Custom CSV Import:** Upload your own CSV vocabulary lists directly from the browser.

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
