import './assets/css/style.css';
import { StrictMode } from 'react';
import { Home } from './pages/home';
import { Menu } from './components/menu';
import { createRoot } from 'react-dom/client';
import { Footer } from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>,
);
