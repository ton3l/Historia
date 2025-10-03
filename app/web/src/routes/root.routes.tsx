import { Outlet, createRouter, createRootRoute } from '@tanstack/react-router';
import { indexRoute } from '@routes/index.route';
import { boardRoute } from './board.route';
import Nav from '@components/Nav';

export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <Nav />
        </>
    ),
});

const routeTree = rootRoute.addChildren([ indexRoute, boardRoute ]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
