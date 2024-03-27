import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Checkout from './pages/Checkout';

const querryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={querryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>

)

