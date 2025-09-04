import express from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'config/private.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'config/certificate.crt')),
};

export const app = express();
export const port = Number(process.env.PORT) || 3000;
export const httpsServer = https.createServer(options, app);
