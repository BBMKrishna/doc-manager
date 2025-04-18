// src/routes/upload.ts
import { Router } from "express";
import { upload } from "../utils/multer";
import { uploadToS3 } from "../services/s3Service";
import { saveMetadata } from "../services/dynamoDbService";
import { v4 as uuid } from "uuid";

const router = Router();

router.post("/", upload.single("file"), (req, res) => {
  (async () => {
    try {
      const file = req.file;
      if (!file) return res.status(400).json({ error: "No file uploaded" });

      const s3Url = await uploadToS3(file);

      const metadata = {
        id: uuid(),
        filename: file.filename || file.originalname,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        s3Url,
        uploadedAt: new Date().toISOString(),
      };

      await saveMetadata(metadata);
      res.status(201).json({ message: "File uploaded successfully", s3Url });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Upload failed" });
    }
  })();
});

export default router;
