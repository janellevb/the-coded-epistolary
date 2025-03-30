import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import GalleryPage from "./pages/gallery_page.tsx";
import MainPage from "./pages/main_page.tsx";
import Page1 from "./pages/page1.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/page1" element={<Page1 />} />
        {/*<Route path="/gallery" element={<GalleryPage />} />*/}
        {/*<Route path="/gallery" element={<GalleryPage />} />*/}
      </Routes>
    </HashRouter>
  </StrictMode>,
)