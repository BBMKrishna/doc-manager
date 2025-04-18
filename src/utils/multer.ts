// src/config/multer.ts
import multer from 'multer';

const storage = multer.memoryStorage(); // keeps file in memory before upload
export const upload = multer({ storage });
