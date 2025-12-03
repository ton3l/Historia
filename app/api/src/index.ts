import { app, httpsServer, port } from '@server/index';
import type { Application, Request, Response } from 'express';
import https from 'https';

interface ConstructorOptions {
    app: Application;
    port: number;
    httpsServer: https.Server;
};

interface InitOptions extends ConstructorOptions {  
    router: any;
};

class API {
    private app: Application;
    private port: number;
    private httpsServer: https.Server;

    private constructor(options: ConstructorOptions) {
        this.app = options.app;
        this.port = options.port;
        this.httpsServer = options.httpsServer;
    }

    public static init(options: ConstructorOptions) {
        const api = new API(options);
        api.listen();
    }

    private listen() {
        this.httpsServer.listen(this.port, () => {
            console.log(`API listening on port ${this.port}`);
        });

        this.app.post('/api/register', (req: Request, res: Response) => {
            console.log(req.body);
            res.send(req.body);
        });
    }
}

API.init({
    app,
    port,
    httpsServer,
});
