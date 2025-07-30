<script setup>
import { ref } from 'vue';
import * as UC from '@uploadcare/file-uploader';
import '@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css';

import catalog from '@/social-sizes.json'; // typed as CatalogApp[]
import { useUploadcareFiles } from '@/composables/useUploadcareFiles';
import { useSocialPresets } from '@/composables/useSocialPresets';
import { useVariants } from '@/composables/useVariants';

UC.defineComponents(UC);

const publicKey = import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY;
const ctxProviderRef = ref<HTMLElement | null>(null);

const { files, handleChangeEvent } = useUploadcareFiles();

const { selectedApp, onlySimple, dedupeByWH, appNames, socialPresets } =
  useSocialPresets(catalog);

const { allVariants } = useVariants(files, socialPresets);
</script>

<template>
  <main class="page">
    <section class="card">
      <header class="card__header">
        <div class="head">
          <div>
            <h1 class="title">Upload & Generate Social Sizes</h1>
            <p class="subtitle">Upload an image and we’ll generate common social media sizes automatically.</p>
          </div>
        </div>
      </header>

      <div class="uploader">
        <uc-config ctx-name="my-uploader" :pubkey="publicKey"  img-only accept="image/*"/>
        <uc-file-uploader-regular ctx-name="my-uploader" class="uploader__ui" />
        <uc-upload-ctx-provider ctx-name="my-uploader" ref="ctxProviderRef" @change="handleChangeEvent" />
      </div>

      <div v-if="appNames.length" class="controls" role="region" aria-labelledby="platform-label">
        <div class="field">
          <label id="platform-label" for="platform">Platform</label>

          <div class="select-wrap">
            <select id="platform" v-model="selectedApp" aria-label="Filter by platform">
              <option value="">All</option>
              <option v-for="name in appNames" :key="name" :value="name">
                {{ name }}
              </option>
            </select>

            <svg class="chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div v-if="allVariants.length" class="variants">
        <h2 class="section-title">Generated Social Sizes</h2>
        <div class="gallery">
          <div v-for="variant in allVariants" :key="`${variant.file.cdnUrl}-${variant.key}`"
            class="gallery__item uniform" tabindex="0">
            <div class="gallery__media uniform">
              <img :src="variant.url" :alt="variant.alt" class="gallery__img uniform" loading="lazy" />
              <div class="badge">{{ variant.app }} · {{ variant.w }}×{{ variant.h }}</div>
            </div>
            <div class="gallery__meta">
              <span class="gallery__name" :title="variant.label">{{ variant.label }}</span>
              <a class="download" :href="variant.downloadUrl" :download="`${variant.key}.jpg`"
                aria-label="Download image" rel="noopener" title="Download">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1z" />
                  <path d="M5 20a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H5z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>

      <p v-else class="empty">No files yet. Upload something to get started.</p>
    </section>
  </main>
</template>

<style scoped>

.page {
  --bg: #0b0b0e;
  --surface: rgba(18, 19, 23, 0.65);
  --text: #e5e7eb;
  --muted: #a1a1aa;
  --accent: #8b8ef7;
  --ring: 0 0 0 3px rgba(139, 142, 247, .45);
  --badge-bg: rgba(255, 255, 255, 0.10);
  --surface-elev: rgba(255, 255, 255, 0.06);
  --download-bg: rgba(255, 255, 255, 0.06);
  --download-hover: rgba(255, 255, 255, 0.10);
  --divider: rgba(255, 255, 255, 0.08);
  --radius: 14px;

  color: var(--text);
  background: var(--bg);
  background-image:
    radial-gradient(1200px 600px at 10% -20%, rgba(139, 142, 247, .14), transparent 50%),
    radial-gradient(900px 500px at 120% 120%, rgba(45, 212, 191, .16), transparent 45%);

  color-scheme: dark;

  display: grid;
  place-items: center;
  padding: 28px;
  min-height: 100dvh;
}

.download {
  display: inline-flex;
  align-items: center;
  gap: .25rem;
}

.download svg {
  width: 1.25rem;
  height: 1.25rem;
}

.download:hover {
  opacity: .9;
}

.card {
  width: min(1000px, 96vw);
  background: var(--surface);
  backdrop-filter: blur(10px) saturate(120%);

  box-shadow: var(--shadow);
  padding: 28px;
  transition: background-color .2s ease, border-color .2s ease, box-shadow .2s ease, transform .06s ease;
}

.card__header {
  margin-bottom: 18px;
}

.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.title {
  font-size: clamp(1.35rem, 1.15rem + 1.2vw, 1.9rem);
  line-height: 1.2;
  font-weight: 800;
  color: var(--text);
  margin: 0 0 6px;
  letter-spacing: -.01em;
}

.subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}

/* Controls */
.controls {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  background: transparent;
  width: 10rem;
}

.field {
  min-width: 220px;
  flex: 1 1 260px;
}

.field>label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
}

.select-wrap {
  position: relative;
  margin-top: 6px;
}

.select-wrap select {
  appearance: none;
  width: 100%;
  padding: 10px 36px 10px 12px;
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--text);
  box-shadow: var(--shadow);
  transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease, transform .06s ease;
}

.select-wrap select:hover {
  transform: translateY(-0.5px);
}

.select-wrap select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: var(--ring);
}

.chevron {
  position: absolute;
  right: 10px;
  top: 50%;
  width: 16px;
  height: 16px;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--muted);
}

.hint {
  display: block;
  margin-top: 6px;
  font-size: 0.75rem;
  color: var(--muted);
}

.uploader {
  margin-top: 10px;
  margin-bottom: 18px;
}

.uploader__ui {
  display: block;
}

.section-title {
  margin: 18px 0 10px;
  font-size: 1.05rem;
  color: var(--text);
  font-weight: 700;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px;
  margin-top: 8px;
}

.gallery__item {
  position: relative;
  overflow: hidden;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background-color .2s ease;
  outline: none;
}

.gallery__item:hover,
.gallery__item:focus {
  transform: translateY(-2px);
  border-color: color-mix(in oklab, var(--accent) 35%, transparent);
}

.gallery__item.uniform {
  display: flex;
  flex-direction: column;
  height: 320px;
}

.gallery__media {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid var(--divider);
}

.gallery__media.uniform {
  flex: 1 1 auto;
  display: grid;
  place-items: center;
}

.gallery__img,
.gallery__img.uniform {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: var(--badge-bg);
  color: #fff;
  font-size: 0.74rem;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
}

.gallery__meta {
  margin-top: auto;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
}

.gallery__name {
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text);
  font-size: 0.9rem;
}

.download {
  font-size: 0.85rem;
  text-decoration: none;
  border: 1px solid var(--border);
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--download-bg);
  color: var(--text);
  transition: background-color .2s ease, border-color .2s ease, transform .06s ease, box-shadow .2s ease;
}

.download:hover {
  background: var(--download-hover);
  transform: translateY(-0.5px);
}

.download:focus {
  outline: none;
  box-shadow: var(--ring);
  border-color: var(--accent);
}

.empty {
  color: var(--muted);
  font-size: 0.95rem;
  margin: 10px 0 0;
}

.btn {
  padding: 10px 12px;
  font-size: 0.9rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface-elev);
  color: var(--text);
  transition: transform .06s ease, border-color .2s ease, box-shadow .2s ease, background-color .2s ease, opacity .2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: var(--ring);
}

.btn:disabled {
  opacity: .5;
  cursor: not-allowed;
  transform: none;
}
</style>
