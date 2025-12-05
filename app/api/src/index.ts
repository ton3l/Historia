import { app, httpsServer, port } from '@server/config/index';
import { router } from '@server/routes/index.route';
import { API } from '@infrastructure/server/index';

API.init({
    app,
    port,
    httpsServer,
    router,
});
