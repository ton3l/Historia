import type { Application, Router } from 'express';
import express from 'express';
import https from 'https';
import utils from 'util';
import path from 'path';

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
        this.app.use('/api', middlewareKernel);
        this.app.use('/api', router);

        const appDirectory = path.dirname(Bun.main);
        const publicPath = path.resolve(appDirectory, './public');
        this.app.use(express.static(publicPath));
        this.app.get('*splat', (req, res) => {
            res.sendFile(path.join(publicPath, 'index.html'))
        });

        this.httpsServer.listen(this.port, () => {
            const log = {
                application: 'historia-api',
                running_port: this.port,
                status: 'running',
                timestamp: new Date().toLocaleString(),
            };

            console.log(utils.inspect(log, { showHidden: true, colors: true }), '\n');
        });
    }
}
