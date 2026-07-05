import { ViteReactSSG } from 'vite-react-ssg/single-page';
import App from './App';
import './index.css';

// vite-react-ssg single-page entry: pre-renders App to static HTML at build time,
// then hydrates on the client (playbook §4 — fixes SEO/link previews).
export const createRoot = ViteReactSSG(<App />);
