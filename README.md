# Ishak MESSAOUDI - Portfolio

A modern, responsive personal portfolio website built with React and Vite, showcasing my skills as a Full-Stack Developer.

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices
- **Dark/Light Theme** - Toggle between themes with persistent preference
- **Animated Star Background** - Interactive cosmic-themed background
- **Smooth Animations** - CSS animations for engaging user experience
- **Skills Showcase** - Visual skill representation with proficiency levels
- **Single Page Application** - Fast navigation with React Router

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM
- **Icons:** Lucide React, React Icons
- **UI Components:** Radix UI (Toast)
- **Utilities:** clsx, class-variance-authority, tailwind-merge

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable UI components
│   │   ├── AboutSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NavBar.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles & theme
│   └── main.jsx         # Entry point
├── Dockerfile           # Docker configuration
├── nginx.conf           # Nginx config for production
├── vite.config.js       # Vite configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

## 🐳 Docker

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t portfolio .

# Run the container
docker run -d -p 8080:80 portfolio
```

The app will be available at `http://localhost:8080`

### Docker Compose (optional)

Create a `docker-compose.yml`:

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

Then run:

```bash
docker-compose up -d
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* ... */
}
```

### Personal Information

Update your personal details in the following components:
- `HeroSection.jsx` - Name, title, and introduction
- `AboutSection.jsx` - Bio and background
- `SkillsSection.jsx` - Technical skills and proficiency levels

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

- **Location:** Rouen, France
- **Status:** Seeking internship opportunities

---

Built with ❤️ by Ishak MESSAOUDI
