import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@routes/root.routes';
import Board from '@components/Board';

export const boardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/board',
    component: Board,
});
