import type { Application, Router } from 'express';
import https from 'https';

interface ConstructorOptions {
    app: Application;
    port: number;
    httpsServer: https.Server;
}

interface InitOptions extends ConstructorOptions {
    router: Router;
    middlewareKernel: Router;
}

export class API {
    private app: Application;
    private port: number;
    private httpsServer: https.Server;

    private constructor(options: ConstructorOptions) {
        this.app = options.app;
        this.port = options.port;
        this.httpsServer = options.httpsServer;
    }

    public static init(options: InitOptions) {
        const api = new API(options);
        api.listen(options.router, options.middlewareKernel);
    }

    private listen(router: Router, middlewareKernel: Router) {
        this.app.use(middlewareKernel);
        this.app.use('/', router);
        

        this.httpsServer.listen(this.port, () => {
            console.log(`API listening on port ${this.port}`);
        });

    }
}