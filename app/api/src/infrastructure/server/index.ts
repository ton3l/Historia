import type { Application, Router } from 'express';
import https from 'https';

interface ConstructorOptions {
    app: Application;
    port: number;
    httpsServer: https.Server;
}

interface InitOptions extends ConstructorOptions {
    router: Router;
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
        api.listen(options.router);
    }

    private listen(router: Router) {
        this.httpsServer.listen(this.port, () => {
            console.log(`API listening on port ${this.port}`);
        });

        this.app.use('/', router);
    }
}