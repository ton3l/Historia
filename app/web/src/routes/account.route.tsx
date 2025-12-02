import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '@routes/root.routes';
import Account from '@pages/Account';

export const accountRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/account',
    component: Account,
});
