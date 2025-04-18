// src/app.ts
import express from 'express';
import uploadRouter from './routes/upload';

const app = express();
app.use(express.json());
app.use('/api/upload', uploadRouter);

export default app;
