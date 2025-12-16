import type { Request, Response, NextFunction } from "express";
import type { BaseMiddleware } from "./base.middleware";
import { injectable } from "tsyringe";
import utils from "util";

@injectable()
export class Logger implements BaseMiddleware {
    public handle = (req: Request, res: Response, next: NextFunction) => {
        const requestLog = {
            type: "request",
            ip: req.ip,
            method: req.method,
            url: req.url,
            body: req.body,
            params: req.params,
            timestamp: new Date().toLocaleString(),
        };

        console.log(utils.inspect(requestLog, { showHidden: true, colors: true }));
        next();
    }
}