import { Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from '@/pages/Dashboard';
import Analytics from '@/pages/Analytics';
import Settings from '@/pages/Settings';
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import MainLayout from '@/components/layout/MainLayout';
import AuthLayout from '@/components/layout/AuthLayout';
import LoginPage from "@/pages/LoginPage.tsx";
import RegisterPage from "@/pages/RegisterPage.tsx";

function App() {
  return (
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
