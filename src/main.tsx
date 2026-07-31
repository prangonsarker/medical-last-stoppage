import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { applySEO } from './utils/seo';
import { content } from './content';
import App from './App';

// Apply Production SEO & Social Meta
applySEO();

// Apply Theme Colors
if (content.theme) {
  const root = document.documentElement;
  if (content.theme.primaryColor) root.style.setProperty('--primary', content.theme.primaryColor);
  if (content.theme.accentColor) {
    root.style.setProperty('--accent', content.theme.accentColor);
    root.style.setProperty('--color-accent', content.theme.accentColor);
  }
  if (content.theme.background) root.style.setProperty('--background', content.theme.background);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

