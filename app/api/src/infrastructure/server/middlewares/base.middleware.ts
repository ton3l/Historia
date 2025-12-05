import type { Handler } from "express";

export interface BaseMiddleware {
    handle: Handler;
}