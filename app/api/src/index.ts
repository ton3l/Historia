import { app, httpsServer, port } from './infrastructure/server';
import type { Application, Request, Response } from 'express';
import https from 'https';
import cors from 'cors';

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
        this.app.use(cors());
        this.port = options.port;
        this.httpsServer = options.httpsServer;
    }

    public static init(options: ConstructorOptions) {
        const api = new API(options);
        api.listen();
    }

    private listen() {
        this.app.listen(this.port, () => {
            console.log(`API listening on port ${this.port}`);
        });

        this.app.post('/api/register', (req: Request, res: Response) => {
            console.log(req.body);
        });
    }
}

API.init({
    app,
    port,
    httpsServer,
});
