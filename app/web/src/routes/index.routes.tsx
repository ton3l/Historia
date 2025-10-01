import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root.routes';
import Logo from '@components/Logo';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Logo,
})