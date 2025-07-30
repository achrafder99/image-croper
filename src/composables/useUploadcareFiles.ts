import { ref } from 'vue';
import type { UploadcareEntry } from '@/types/media';

export function useUploadcareFiles() {
  const files = ref<UploadcareEntry[]>([]);

  const handleChangeEvent = (e: CustomEvent) => {
    const detail = (e as any).detail;
    if (detail?.allEntries) {
      files.value = detail.allEntries.filter((f: UploadcareEntry) => f.status === 'success');
    }
  };

  return { files, handleChangeEvent };
}
