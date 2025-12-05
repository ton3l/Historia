import express from 'express';
import https from 'https';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'private.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'certificate.pem')),
};

export const app = express();
app.use(cors());
app.use(express.json());

export const port = Number(process.env.PORT) || 3000;

export const httpsServer = https.createServer(options, app);
