# PRANTH - Stone Paper Scissors

A **deliberately broken** stone paper scissors game with an attractive futuristic UI where nothing works as expected!

## 🎮 About the Game

PRANTH is a stone paper scissors game with intentionally mismatched functions that make it extremely difficult to win. The game features:

- **Mismatched Game Logic**: The rules are completely backwards
- **Wrong Symbols**: The emojis don't match their actual functions
- **Confusing AI**: The computer makes seemingly random choices
- **Attractive UI**: Modern, futuristic design with animations
- **High Loss Rate**: Players have a very low chance of winning

## 🎯 How to Play

1. Open `index.html` in your web browser
2. Click on Stone (🪨), Paper (📄), or Scissors (✂️)
3. Try to figure out the broken logic!
4. Watch your score plummet as the computer consistently wins

## 🔧 Technical Details

### Technologies/Components Used

**For Software:**
- **Languages used:**
  - HTML5 (Semantic markup, modern elements)
  - CSS3 (Advanced styling, animations, responsive design)
  - JavaScript ES6+ (Modern JavaScript features, DOM manipulation)

- **Frameworks used:**
  - None (Vanilla JavaScript for maximum control and lightweight design)

- **Libraries used:**
  - Google Fonts (Orbitron font family for futuristic typography)
  - CSS3 Animations (Keyframes, transitions, transforms)
  - CSS3 Gradients (Linear and radial gradients for visual effects)

- **Tools used:**
  - Visual Studio Code (Code editor)
  - Git (Version control)
  - Modern Web Browser (Chrome, Firefox, Safari, Edge for testing)
  - CSS3 Flexbox and Grid (Layout systems)
  - CSS3 Backdrop-filter (Glassmorphism effects)

### Implementation

**For Software:**

#### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/hardorsoft.git

# Navigate to the project directory
cd hardorsoft

# No additional dependencies required - just open index.html in your browser
```

#### Run
```bash
# Method 1: Direct file opening (Simplest)
# Simply double-click index.html or drag it into your browser
# Or right-click and select "Open with" > your preferred browser

# Method 2: Using a local server (Recommended for development)
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000

# Using Live Server (VS Code extension)
# Install Live Server extension and right-click index.html > "Open with Live Server"

# Then open http://localhost:8000 in your browser
```

### Project Documentation

**For Software:**

#### Screenshots
![Game Interface](screenshots/game-interface.png)
*Main game interface showing the futuristic UI with score board, choice buttons, and particle effects*

![Gameplay](screenshots/gameplay.png)
*Active gameplay showing player vs computer choices with mismatched symbols and confusing results*

![Mobile Responsive](screenshots/mobile-responsive.png)
*Mobile-responsive design showing how the game adapts to smaller screens*

#### Diagrams
![Architecture](diagrams/architecture.png)
*Simple client-side architecture showing HTML structure, CSS styling, and JavaScript game logic*

#### Key Technical Features

**Frontend Architecture:**
- **HTML5 Structure**: Semantic markup with modern elements
- **CSS3 Styling**: Advanced features including:
  - CSS Grid and Flexbox for responsive layouts
  - CSS Custom Properties (variables) for theming
  - CSS Animations and Transitions for smooth interactions
  - CSS Gradients and Backdrop-filters for visual effects
  - CSS Media Queries for responsive design

**JavaScript Implementation:**
- **ES6+ Features**: Arrow functions, template literals, destructuring
- **DOM Manipulation**: Modern JavaScript APIs for dynamic content
- **Event Handling**: Event listeners for user interactions
- **Game Logic**: Intentionally broken algorithms for maximum confusion
- **State Management**: Local state management for game scores and statistics

**Performance Optimizations:**
- **Lightweight Design**: No external dependencies except Google Fonts
- **Efficient Animations**: CSS-based animations for smooth performance
- **Responsive Images**: Optimized for different screen sizes
- **Minimal JavaScript**: Efficient code structure for fast loading

**Browser Compatibility:**
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile Support**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Works on older browsers with reduced features

**Development Tools:**
- **Code Editor**: Visual Studio Code with extensions
- **Version Control**: Git for source code management
- **Testing**: Cross-browser testing on multiple devices
- **Performance**: Lighthouse for performance auditing

#### File Structure
```
hardorsoft/
├── index.html          # Main HTML file with game structure
├── style.css           # CSS styling with animations and responsive design
├── script.js           # JavaScript game logic (intentionally broken)
├── README.md           # Project documentation
└── screenshots/        # Game screenshots (to be added)
    ├── game-interface.png
    ├── gameplay.png
    └── mobile-responsive.png
```

#### Game Logic Documentation

**Mismatched Functions:**
```javascript
// Stone actually loses to paper and scissors (should beat scissors)
stone: {
    beats: ['paper', 'scissors'], // Wrong! Should only beat scissors
    losesTo: ['stone'] // Wrong! Should lose to paper
}

// Paper actually beats everything (should only beat stone)
paper: {
    beats: ['stone', 'scissors'], // Wrong! Should only beat stone
    losesTo: ['paper'] // Wrong! Should lose to scissors
}

// Scissors actually loses to everything (should beat paper)
scissors: {
    beats: ['stone', 'paper'], // Wrong! Should only beat paper
    losesTo: ['scissors'] // Wrong! Should lose to stone
}
```

**Symbol Mismatch:**
```javascript
const choiceSymbols = {
    stone: '✂️',    // Wrong! Should be 🪨
    paper: '🪨',    // Wrong! Should be 📄
    scissors: '📄'  // Wrong! Should be ✂️
};
```

#### Development Guidelines

**Code Style:**
- Use semantic HTML5 elements
- Follow BEM methodology for CSS classes
- Use ES6+ JavaScript features
- Comment complex logic (especially the broken parts)

**Testing:**
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design on mobile devices
- Verify broken game logic works as intended
- Check accessibility features

**Performance:**
- Optimize CSS animations for smooth 60fps
- Minimize JavaScript execution time
- Use efficient DOM manipulation
- Implement lazy loading for future features

## 🎨 UI Design

The game features a modern, futuristic aesthetic with:
- Dark gradient background
- Neon color scheme (cyan, pink, blue, green)
- Glassmorphism effects
- Smooth animations
- Orbitron font for sci-fi feel
- Particle effects for atmosphere

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Start playing and try to figure out the broken logic!

## 🎲 Game Mechanics (Spoilers!)

The game is designed to be frustratingly difficult:

- **Symbol Mismatch**: Stone shows scissors emoji, paper shows stone emoji, scissors shows paper emoji
- **Broken Logic**: Each choice beats the wrong things
- **Random Elements**: 30% chance your choice gets changed randomly
- **Confusing AI**: Computer choices seem random but are weighted against you
- **Score Tampering**: Random score changes occur during gameplay
- **Wrong Animations**: Winners get loser animations and vice versa

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 🎯 Purpose

This game was created as a humorous take on traditional stone paper scissors, demonstrating how confusing and frustrating it can be when game logic doesn't work as expected. It's perfect for:

- Confusing friends
- Demonstrating broken game design
- Having a laugh at intentionally bad UX
- Teaching about the importance of consistent game logic

## 🎪 Enjoy the Chaos!

Remember: In PRANTH, nothing works as expected. The more you try to understand the logic, the more confused you'll become. Just embrace the chaos and enjoy the beautiful UI while losing repeatedly!

---

*"In a world where stone beats paper and scissors lose to everything, only PRANTH can save us from logical consistency."* 



