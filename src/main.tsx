import './assets/css/style.css';
import { StrictMode } from 'react';
import { Home } from './pages/home';
import { Menu } from './components/menu';
import { createRoot } from 'react-dom/client';
import { Footer } from './components/footer';
import { HashRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Menu />
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
            <Footer />
        </HashRouter>
    </StrictMode>,
);
