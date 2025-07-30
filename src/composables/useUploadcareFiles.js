import { ref } from 'vue';
export function useUploadcareFiles() {
    const files = ref([]);
    const handleChangeEvent = (e) => {
        const detail = e.detail;
        if (detail?.allEntries) {
            files.value = detail.allEntries.filter((f) => f.status === 'success');
        }
    };
    return { files, handleChangeEvent };
}
