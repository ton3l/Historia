import { app, httpsServer, port } from './infrastructure/server';
import type { Application } from 'express';
import https from 'https';

type initOptions = {
    app: Application;
    port: number;
    httpsServer: https.Server;
};

class API {
    private app: Application;
    private port: number;
    private httpsServer: https.Server;

    private constructor(options: initOptions) {
        this.app = options.app;
        this.port = options.port;
        this.httpsServer = options.httpsServer;
    }

    public static init(options: initOptions) {
        const api = new API(options);
        api.listen();
    }

    private listen() {
        this.httpsServer.listen(this.port, () => {
            console.log(`API listening on port ${this.port}`);
        });
    }
}

API.init({
    app,
    port,
    httpsServer,
});
