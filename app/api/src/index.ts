import 'reflect-metadata';
import '@infrastructure/dependence-injection/container.di';
import { app, httpsServer, port } from '@server/config/index';
import { AppRouter } from '@server/routes/index.route';
import { MiddlewareKernel } from '@infrastructure/server/middlewares/index.middleware';
import { API } from '@infrastructure/server/index';
import { container } from 'tsyringe';

const appRouter = container.resolve(AppRouter);
const middlewareKernel = container.resolve(MiddlewareKernel);

API.init({
    app,
    port,
    httpsServer,
    router: appRouter.getRouter(),
    middlewareKernel: middlewareKernel.getMiddlewares(),
});
