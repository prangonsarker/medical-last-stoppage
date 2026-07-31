import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { applySEO } from './utils/seo';

fetch('/config.json')
  .then((res) => res.json())
  .then((configData) => {
    (window as any).__APP_CONFIG__ = configData;
    
    // Apply Production SEO & Social Meta
    applySEO(configData);
    
    // Apply Theme Colors
    if (configData.theme) {
      const root = document.documentElement;
      if (configData.theme.primaryColor) root.style.setProperty('--primary', configData.theme.primaryColor);
      if (configData.theme.accentColor) {
        root.style.setProperty('--accent', configData.theme.accentColor);
        root.style.setProperty('--color-accent', configData.theme.accentColor);
      }
      if (configData.theme.background) root.style.setProperty('--background', configData.theme.background);
    }

    import('./App.tsx').then(({ default: App }) => {
      createRoot(document.getElementById('root')!).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    });
  })
  .catch((err) => {
    console.error('Failed to load config.json', err);
    document.body.innerHTML = '<div style="color:white;text-align:center;margin-top:20vh;font-family:sans-serif;">Failed to load configuration.</div>';
  });
