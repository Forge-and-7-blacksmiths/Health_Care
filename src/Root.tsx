import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App.tsx';
import { Landing } from './components/Landing/Landing.tsx';
import { RegisterPage } from './Pages/Register/RegisterPage.tsx';
import { LoginPage } from './Pages/Login/LoginPage.tsx';
import { MainPage } from './Pages/MainPage/MainPage.tsx';
import { CatalogPage } from './Pages/Catalog/CatalogPage.tsx'
import { DietPage } from './Pages/DietPage/DietPage.tsx';
import { AboutUs } from './Pages/AboutUs/AboutUs.tsx';
import { NotFoundPage } from './Pages/NotFoundPage/NotFoundPage.tsx';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="signin" element={<LoginPage />} />
        <Route path="signup" element={<RegisterPage />} />

        <Route path="main-page">
          <Route index element={<CatalogPage />} />
          <Route path=":itemId" element={<MainPage />} />
        </Route>

        <Route path="diet" element={<DietPage />} />

        <Route path="about-us" element={<AboutUs />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);