// src/composables/useSocialPresets.ts
import { computed, ref } from 'vue';
import { slug } from '@/utils/imageUrls';
export function useSocialPresets(catalog) {
    const selectedApp = ref('');
    const onlySimple = ref(false);
    const dedupeByWH = ref(true);
    const appNames = computed(() => catalog.map((c) => c.app));
    const allCatalogPresets = computed(() => {
        return catalog.flatMap((app) => (app.sizes || []).map((sz) => ({
            key: `${slug(app.app)}_${slug(sz.name)}_${sz.width}x${sz.height}`,
            label: `${app.app} · ${sz.name} · ${sz.width}×${sz.height}`,
            w: sz.width,
            h: sz.height,
            app: app.app,
            sizeName: sz.name,
            simple: !!sz.simple,
        })));
    });
    const socialPresets = computed(() => {
        let list = allCatalogPresets.value;
        if (selectedApp.value)
            list = list.filter((p) => p.app === selectedApp.value);
        if (onlySimple.value)
            list = list.filter((p) => p.simple);
        if (dedupeByWH.value) {
            const seen = new Set();
            list = list.filter((p) => {
                const key = `${p.app}-${p.w}x${p.h}`;
                if (seen.has(key))
                    return false;
                seen.add(key);
                return true;
            });
        }
        return list;
    });
    return {
        selectedApp,
        onlySimple,
        dedupeByWH,
        appNames,
        allCatalogPresets,
        socialPresets,
    };
}
