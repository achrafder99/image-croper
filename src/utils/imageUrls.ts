export const ensureSlash = (url: string) => (url.endsWith('/') ? url : url + '/');

export const buildVariantUrl = (cdnUrl: string, w: number, h: number) => {
  const base = ensureSlash(cdnUrl);
  return `${base}-/scale_crop/${w}x${h}/center/-/format/auto/-/quality/smart/`;
};

export const fileBaseName = (name?: string | null) =>
  name ? name.replace(/\.[^/.]+$/, '') : 'image';

export const slug = (s?: string | null) =>
  String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const buildDownloadUrl = (variantUrl: string, filename = 'image.jpg') => {
  const u = ensureSlash(variantUrl).replace('/format/auto/', '/format/jpeg/');
  const safe = filename.replace(/[^A-Za-z0-9._-]+/g, '-');
  return `${u}-/inline/no/${encodeURIComponent(safe)}`;
};
