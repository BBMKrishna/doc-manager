// src/services/dynamoService.ts
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DocumentMeta } from "../types/DocumentMeta";

const db = new DynamoDBClient({ region: process.env.AWS_REGION });

export async function saveMetadata(meta: DocumentMeta) {
  const command = new PutItemCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Item: {
      id: { S: meta.id },
      filename: { S: meta.filename },
      originalName: { S: meta.originalName },
      mimeType: { S: meta.mimeType },
      size: { N: meta.size.toString() },
      s3Url: { S: meta.s3Url },
      uploadedAt: { S: meta.uploadedAt },
    },
  });

  await db.send(command);
}
