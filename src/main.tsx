import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CodeEditorProvider } from './context/CodeEditorProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CodeEditorProvider>
      <App />
    </CodeEditorProvider>
  </StrictMode>
);
