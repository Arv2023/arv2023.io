# Arv Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a sleek dark theme with smooth animations.

## 🚀 Features

- **Modern Dark Theme** - Elegant dark design with purple/pink gradient accents
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Fade-in, slide-up, and hover effects
- **Component-Based** - Clean, modular React components
- **Fast Development** - Powered by Vite for lightning-fast HMR
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

## 📦 Installation

1. **Install dependencies:**
   ```powershell
   npm install
   ```

## 🏃 Running the Project

Start the development server:
```powershell
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

Create a production build:
```powershell
npm run build
```

Preview the production build:
```powershell
npm run preview
```

## 📁 Project Structure

```
arv2023.io/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Top navigation bar
│   │   ├── Hero.jsx          # Hero/landing section
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Skills showcase
│   │   ├── Projects.jsx      # Project portfolio
│   │   ├── Contact.jsx       # Contact information
│   │   └── Footer.jsx        # Footer component
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## 🎨 Customization

### Update Your Information

1. **About Section** (`src/components/About.jsx`):
   - Replace the placeholder image URL
   - Update your bio text

2. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Add your LinkedIn profile URL
   - Verify GitHub link

3. **Skills Section** (`src/components/Skills.jsx`):
   - Modify the skills arrays to match your expertise

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your actual projects
   - Update descriptions and tags

### Color Scheme

The theme uses purple/pink gradients. To customize colors, edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors here
      }
    }
  }
}
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing

## 📝 License

© 2025 Arv. All rights reserved.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ and code
