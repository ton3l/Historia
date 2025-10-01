import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/root.routes';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import '@styles/index.css';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
