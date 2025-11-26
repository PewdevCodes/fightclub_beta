# Fight Club Interactive Webpage

An immersive, interactive Fight Club-themed webpage featuring dynamic image popups, blurred video background, and atmospheric background music.

## ✨ Features

- **Interactive Image Popups**: Mouse over the hero section to trigger continuous Fight Club image popups that follow your cursor with smooth bouncing animations
- **Blurred Video Background**: Looping Fight Club fight scene playing in the background with blur and darkening effects
- **Background Music**: Subtle atmospheric music at 10% volume for an immersive experience
- **Elegant Typography**: Custom fonts (Bodoni Moda serif and Space Grotesk sans-serif) for a sophisticated look
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **GSAP Animations**: Smooth, professional animations using GreenSock Animation Platform
- **Hover Effects**: Glowing hover effect on the Fight Club logo

## 🎨 Design Inspiration

The design is inspired by [Our Revolution](https://our-revolution.com/) with a dark, minimalist aesthetic adapted for the Fight Club theme.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with video and audio elements
- **CSS3** - Modern styling with flexbox, animations, and custom properties
- **JavaScript** - Interactive functionality and dynamic DOM manipulation
- **GSAP (GreenSock Animation Platform)** - Advanced animations with easing functions
- **Google Fonts** - Bodoni Moda (serif) and Space Grotesk (sans-serif)

## 📁 Project Structure

```
fightclub-popups/
├── index.html              # Main HTML file
├── style.css               # Styles and animations
├── script.js               # Interactive JavaScript logic
├── fightclub.png           # Logo image
├── fightclubvideo.mp4      # Background video
├── fightclubmusic.mp3      # Background audio
└── images/                 # Folder containing 16 Fight Club images
    ├── image1.jpeg
    ├── image2.jpeg
    └── ... (image16.jpeg)
```

## 🚀 Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd fightclub-popups
   ```

3. Open `index.html` in your web browser or use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Or using Node.js
   npx serve
   ```

4. Hover your mouse over the text to see the interactive image popups!

## 🎯 Key Features Breakdown

### Image Popup System

- **Throttled Creation**: Images spawn every 300ms as you move your mouse
- **Sequential Display**: Cycles through all 16 images in order
- **Smooth Animations**: Bouncing entrance with `back.out(1.7)` easing
- **Auto-removal**: Images fade out and remove themselves after display

### Typography

- **Bodoni Moda**: Used for the main hero text with italic subtitle
- **Space Grotesk**: Bold sans-serif for the logo and navigation
- **Responsive Sizing**: Text scales from mobile (2.2rem) to desktop (5.8rem)

### Video Background

- **Blur Effect**: 20px blur with 40% brightness for readability
- **Auto-play**: Muted, looping video that starts on page load
- **Fixed Position**: Covers entire viewport behind content

## 🎨 Customization

### Change Background Video

Replace `fightclubvideo.mp4` with your own video file

### Adjust Music Volume

Edit in `script.js`:

```javascript
audio.volume = 0.1; // Change value between 0.0 and 1.0
```

### Add More Images

1. Add images to the `images/` folder
2. Update the images array in `script.js`:

```javascript
const images = [
  'images/image1.jpeg',
  // Add more image paths here
];
```

### Modify Color Theme

Change the hover glow color in `style.css`:

```css
.hero-logo:hover {
  filter: drop-shadow(
    0 0 25px rgba(255, 107, 107, 0.8)
  ); /* Change RGB values */
}
```

## 📝 The First Rule

> "THE FIRST RULE OF FIGHTCLUB IS TO NOT TALK ABOUT FIGHTCLUB"

## 📄 License

This project is created for educational and portfolio purposes.

## 🙏 Credits

- Design inspiration: [Our Revolution](https://our-revolution.com/)
- Fonts: Google Fonts (Bodoni Moda, Space Grotesk)
- Animations: GSAP by GreenSock
- Fight Club © 1999 20th Century Fox

---

Made with 🥊 by [Your Name]
