import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { EventProvider } from './context/EventContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <EventProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </EventProvider>
    </AuthProvider>
  </StrictMode>
);