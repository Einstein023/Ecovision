import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './index.css'
import { App } from './App.jsx'
import TestApi from './components/Testapi.jsx';
const Dashboard = lazy(() => import('./dashboard.jsx'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-stone-950">
    <div className="text-secondary-clr"><h1 className="text-xl">😒 Your network no good....</h1></div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path='test' element={<TestApi />} />
              <Route 
                path="/dashboard" 
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Dashboard />
                  </Suspense>
                } 
              />
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
