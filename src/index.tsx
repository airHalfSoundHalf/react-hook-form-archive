import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container)
.render(
  <StrictMode>
    <App />
  </StrictMode>
);