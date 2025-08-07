# Nitesh Jaitwar - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS showcasing the professional experience and skills of Nitesh Jaitwar, a Software Engineer specializing in Java development.

![Portfolio Preview](./src/assets/logo.png)

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Performance Optimized**: Lazy loading, code splitting, and optimized bundle size
- **SEO Ready**: Comprehensive meta tags, structured data, and Open Graph tags
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Production Ready**: Error boundaries, form validation, and proper error handling

## 🚀 Live Demo

Visit the live portfolio: [https://niteshjaitwar.dev](https://niteshjaitwar.dev)

## 📱 Sections

1. **Hero Section**: Professional introduction with contact information
2. **About Me**: Detailed background and professional summary
3. **Skills**: Technical expertise organized by categories
4. **Experience**: Professional timeline with detailed work history
5. **Contact**: Interactive contact form with validation

## 🛠️ Technologies Used

- **Frontend**: React 19.1.1, Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.1.0
- **Code Quality**: ESLint with React hooks plugin
- **Performance**: Lazy loading, Suspense, Error boundaries
- **SEO**: Structured data, Open Graph, Twitter Cards

## 🏗️ Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png          # Professional logo
│   │   └── react.svg
│   ├── components/
│   │   ├── Header.jsx        # Navigation with smooth scrolling
│   │   ├── Hero.jsx          # Landing section with intro
│   │   ├── About.jsx         # Professional background
│   │   ├── Skills.jsx        # Technical skills showcase
│   │   ├── Experience.jsx    # Work history timeline
│   │   ├── Contact.jsx       # Contact form with validation
│   │   ├── Footer.jsx        # Footer with links
│   │   └── ErrorBoundary.jsx # Error handling
│   ├── App.jsx              # Main app with lazy loading
│   ├── App.css              # Custom styles and animations
│   ├── index.css            # Base styles with Tailwind
│   └── main.jsx             # App entry point
├── index.html               # HTML with SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/niteshjaitwar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Hero.jsx**: Name, title, introduction
2. **src/components/About.jsx**: Professional background, contact details
3. **src/components/Skills.jsx**: Technical skills and proficiency levels
4. **src/components/Experience.jsx**: Work history and achievements
5. **src/components/Contact.jsx**: Contact form endpoint (if using a backend)
6. **index.html**: Meta tags, structured data, and SEO information

### Styling

- **Colors**: Update the gradient colors in Tailwind classes
- **Fonts**: Modify font families in `src/index.css`
- **Logo**: Replace `src/assets/logo.png` with your professional logo
- **Animations**: Customize animations in `src/App.css`

### Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **Option 1: Backend Integration**
   ```javascript
   // In src/components/Contact.jsx
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

2. **Option 2: Email Service (e.g., EmailJS)**
   ```bash
   npm install emailjs-com
   ```

3. **Option 3: Netlify Forms** (if deploying to Netlify)
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific configurations:

```env
VITE_APP_TITLE=Nitesh Jaitwar Portfolio
VITE_CONTACT_EMAIL=nitjaitwar@gmail.com
VITE_LINKEDIN_URL=https://linkedin.com/in/niteshjaitwar
```

### Vite Configuration

The `vite.config.js` is configured with:
- React plugin for JSX support
- Tailwind CSS plugin for styling
- Build optimizations for production

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy settings are automatically configured

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🔍 SEO Optimization

The portfolio includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Canonical URLs**: Prevent duplicate content issues
- **Performance**: Optimized loading and Core Web Vitals

## 🎨 Performance Features

- **Lazy Loading**: Components load only when needed
- **Code Splitting**: Separate bundles for better caching
- **Image Optimization**: Properly sized and optimized images
- **Error Boundaries**: Graceful error handling
- **Form Validation**: Client-side validation with user feedback

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Nitesh Jaitwar**
- Email: nitjaitwar@gmail.com
- Phone: +91 7440800704
- LinkedIn: [linkedin.com/in/niteshjaitwar](https://linkedin.com/in/niteshjaitwar)
- Location: Indore, Madhya Pradesh, India

---

⭐ If you found this portfolio template helpful, please give it a star!

## 🎯 Professional Highlights

- **4+ Years** of Java development experience
- **Expertise** in Spring Boot, Microservices, and enterprise applications
- **50+ Projects** completed successfully
- **100%** client satisfaction rate
- **Agile** methodology experience
- **Available** for new opportunities+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
