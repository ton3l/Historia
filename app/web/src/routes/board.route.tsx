import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@routes/root.routes';
import Board from '@pages/Board';

export const boardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/board/$boardId',
    component: Board,
});
