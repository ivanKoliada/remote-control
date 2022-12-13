import { readFileSync } from 'fs';

export const convertImageToBase64 = (path: string) => {
  return readFileSync(path, 'base64');
};
