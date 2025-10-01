import { Outlet, createRouter, createRootRoute, } from '@tanstack/react-router'
import Nav from '@components/Nav';
import { indexRoute } from './index.routes';
/* Fazer em formato de classe */
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Nav />
    </>
  ),
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}