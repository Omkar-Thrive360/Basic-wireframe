// Typing Effect for Hero Section
const dynamicText = document.getElementById('dynamicText');
const phrases = ["Empowering Future", "Innovating Tomorrow", "Leading Change"];
let phraseIndex = 0;
let letterIndex = 0;

function typeText() {
    if (letterIndex < phrases[phraseIndex].length) {
        dynamicText.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);  // Pause before erasing
    }
}

function eraseText() {
    if (letterIndex > 0) {
        dynamicText.textContent = dynamicText.textContent.slice(0, --letterIndex);
        setTimeout(eraseText, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, 500);  // Start typing next phrase
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);  // Start typing after the page loads
});



