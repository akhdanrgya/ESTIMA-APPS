import "server-only";
import { S3Client } from "@aws-sdk/client-s3";
export function getStorage() {
  const { S3_ENDPOINT, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET } = process.env;
  if (!S3_REGION || !S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY || !S3_BUCKET) throw new Error("S3 configuration is incomplete");
  return { bucket: S3_BUCKET, client: new S3Client({ endpoint: S3_ENDPOINT, region: S3_REGION, forcePathStyle: Boolean(S3_ENDPOINT), credentials: { accessKeyId: S3_ACCESS_KEY_ID, secretAccessKey: S3_SECRET_ACCESS_KEY } }) };
}
