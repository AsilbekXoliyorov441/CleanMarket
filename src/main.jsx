import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { FavouriteContextProvider } from './context/FavouriteContext';


createRoot(document.getElementById("root")).render(
  <FavouriteContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FavouriteContextProvider>
);
