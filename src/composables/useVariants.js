// src/composables/useVariants.ts
import { computed } from 'vue';
import { buildVariantUrl, buildDownloadUrl, fileBaseName, slug } from '@/utils/imageUrls';
export function useVariants(files, socialPresets) {
    const allVariants = computed(() => {
        return files.value.flatMap((file) => {
            const base = fileBaseName(file.fileInfo?.originalFilename);
            return socialPresets.value.map((p) => {
                const viewUrl = buildVariantUrl(file.cdnUrl, p.w, p.h);
                const downloadFileName = `${base}-${slug(p.app)}-${slug(p.sizeName)}-${p.w}x${p.h}.jpg`;
                const downloadUrl = buildDownloadUrl(viewUrl, downloadFileName);
                return {
                    file,
                    ...p,
                    url: viewUrl,
                    downloadUrl,
                    alt: file.fileInfo?.originalFilename
                        ? `${file.fileInfo.originalFilename} — ${p.label}`
                        : `Uploaded file — ${p.label}`,
                };
            });
        });
    });
    return { allVariants };
}
