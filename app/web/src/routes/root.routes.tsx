import { Outlet, createRouter, createRootRoute } from '@tanstack/react-router';
import { indexRoute } from '@routes/index.route';
import { boardRoute } from '@routes/board.route';
import { accountRoute } from '@routes/account.route';
import Nav from '@components/Nav';

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <Nav />
        </>
    ),
});

const routeTree = rootRoute.addChildren([ indexRoute, boardRoute, accountRoute ]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
