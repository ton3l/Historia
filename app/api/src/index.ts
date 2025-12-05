import 'reflect-metadata';
import '@infrastructure/dependence-injection/container.di';
import { app, httpsServer, port } from '@server/config/index';
import { AppRouter } from '@server/routes/index.route';
import { API } from '@infrastructure/server/index';
import { container } from 'tsyringe';

const appRouter = container.resolve(AppRouter);

API.init({
    app,
    port,
    httpsServer,
    router: appRouter.create(),
});
