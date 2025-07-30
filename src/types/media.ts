// src/types/media.ts
export type CatalogSize = {
  name: string;
  width: number;
  height: number;
  simple?: boolean;
};

export type CatalogApp = {
  app: string;
  sizes?: CatalogSize[];
};

export type SocialPreset = {
  key: string;
  label: string;
  w: number;
  h: number;
  app: string;
  sizeName: string;
  simple: boolean;
};

export type UploadcareEntry = {
  status: 'success' | 'failed' | 'pending' | string;
  cdnUrl: string;
  fileInfo?: {
    originalFilename?: string;
  };
};

export type Variant = SocialPreset & {
  file: UploadcareEntry;
  url: string;
  downloadUrl: string;
  alt: string;
};
