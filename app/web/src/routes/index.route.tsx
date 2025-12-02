import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root.routes';
import Index from '@pages/Index';

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Index,
});
