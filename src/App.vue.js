import { ref } from 'vue';
import * as UC from '@uploadcare/file-uploader';
import '@uploadcare/file-uploader/web/uc-file-uploader-regular.min.css';
import catalog from '@/social-sizes.json'; // typed as CatalogApp[]
import { useUploadcareFiles } from '@/composables/useUploadcareFiles';
import { useSocialPresets } from '@/composables/useSocialPresets';
import { useVariants } from '@/composables/useVariants';
UC.defineComponents(UC);
const publicKey = import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY;
const ctxProviderRef = ref < HTMLElement | null > (null);
const { files, handleChangeEvent } = useUploadcareFiles();
const { selectedApp, onlySimple, dedupeByWH, appNames, socialPresets } = useSocialPresets(catalog);
const { allVariants } = useVariants(files, socialPresets);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['download']} */ ;
/** @type {__VLS_StyleScopedClasses['download']} */ ;
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['select-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['select-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['select-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__item']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__item']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__item']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__media']} */ ;
/** @type {__VLS_StyleScopedClasses['uniform']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__img']} */ ;
/** @type {__VLS_StyleScopedClasses['uniform']} */ ;
/** @type {__VLS_StyleScopedClasses['download']} */ ;
/** @type {__VLS_StyleScopedClasses['download']} */ ;
/** @type {__VLS_StyleScopedClasses['download']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
    ...{ class: "page" },
});
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "card__header" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "head" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "subtitle" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "uploader" },
});
const __VLS_0 = {}.UcConfig;
/** @type {[typeof __VLS_components.UcConfig, typeof __VLS_components.ucConfig, ]} */ ;
// @ts-ignore
UcConfig;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ctxName: "my-uploader",
    pubkey: (__VLS_ctx.publicKey),
    imgOnly: true,
    accept: "image/*",
}));
const __VLS_2 = __VLS_1({
    ctxName: "my-uploader",
    pubkey: (__VLS_ctx.publicKey),
    imgOnly: true,
    accept: "image/*",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[publicKey,];
const __VLS_5 = {}.UcFileUploaderRegular;
/** @type {[typeof __VLS_components.UcFileUploaderRegular, typeof __VLS_components.ucFileUploaderRegular, ]} */ ;
// @ts-ignore
UcFileUploaderRegular;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ctxName: "my-uploader",
    ...{ class: "uploader__ui" },
}));
const __VLS_7 = __VLS_6({
    ctxName: "my-uploader",
    ...{ class: "uploader__ui" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const __VLS_10 = {}.UcUploadCtxProvider;
/** @type {[typeof __VLS_components.UcUploadCtxProvider, typeof __VLS_components.ucUploadCtxProvider, ]} */ ;
// @ts-ignore
UcUploadCtxProvider;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    ...{ 'onChange': {} },
    ctxName: "my-uploader",
    ref: "ctxProviderRef",
}));
const __VLS_12 = __VLS_11({
    ...{ 'onChange': {} },
    ctxName: "my-uploader",
    ref: "ctxProviderRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_14;
let __VLS_15;
const __VLS_16 = ({ change: {} },
    { onChange: (__VLS_ctx.handleChangeEvent) });
/** @type {typeof __VLS_ctx.ctxProviderRef} */ ;
var __VLS_17 = {};
// @ts-ignore
[handleChangeEvent, ctxProviderRef,];
var __VLS_13;
if (__VLS_ctx.appNames.length) {
    // @ts-ignore
    [appNames,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "controls" },
        role: "region",
        'aria-labelledby': "platform-label",
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "field" },
    });
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
        id: "platform-label",
        for: "platform",
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "select-wrap" },
    });
    __VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)({
        id: "platform",
        value: (__VLS_ctx.selectedApp),
        'aria-label': "Filter by platform",
    });
    // @ts-ignore
    [selectedApp,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        value: "",
    });
    for (const [name] of __VLS_getVForSourceType((__VLS_ctx.appNames))) {
        // @ts-ignore
        [appNames,];
        __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
            key: (name),
            value: (name),
        });
        (name);
    }
    __VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
        ...{ class: "chevron" },
        viewBox: "0 0 20 20",
        fill: "currentColor",
        'aria-hidden': "true",
    });
    __VLS_asFunctionalElement(__VLS_elements.path)({
        'fill-rule': "evenodd",
        d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
        'clip-rule': "evenodd",
    });
}
if (__VLS_ctx.allVariants.length) {
    // @ts-ignore
    [allVariants,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "variants" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
        ...{ class: "section-title" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "gallery" },
    });
    for (const [variant] of __VLS_getVForSourceType((__VLS_ctx.allVariants))) {
        // @ts-ignore
        [allVariants,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (`${variant.file.cdnUrl}-${variant.key}`),
            ...{ class: "gallery__item uniform" },
            tabindex: "0",
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "gallery__media uniform" },
        });
        __VLS_asFunctionalElement(__VLS_elements.img)({
            src: (variant.url),
            alt: (variant.alt),
            ...{ class: "gallery__img uniform" },
            loading: "lazy",
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "badge" },
        });
        (variant.app);
        (variant.w);
        (variant.h);
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "gallery__meta" },
        });
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "gallery__name" },
            title: (variant.label),
        });
        (variant.label);
        __VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
            ...{ class: "download" },
            href: (variant.downloadUrl),
            download: (`${variant.key}.jpg`),
            'aria-label': "Download image",
            rel: "noopener",
            title: "Download",
        });
        __VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            'aria-hidden': "true",
        });
        __VLS_asFunctionalElement(__VLS_elements.path)({
            d: "M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1z",
        });
        __VLS_asFunctionalElement(__VLS_elements.path)({
            d: "M5 20a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H5z",
        });
    }
}
else {
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "empty" },
    });
}
/** @type {__VLS_StyleScopedClasses['page']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card__header']} */ ;
/** @type {__VLS_StyleScopedClasses['head']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['uploader']} */ ;
/** @type {__VLS_StyleScopedClasses['uploader__ui']} */ ;
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
/** @type {__VLS_StyleScopedClasses['field']} */ ;
/** @type {__VLS_StyleScopedClasses['select-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['chevron']} */ ;
/** @type {__VLS_StyleScopedClasses['variants']} */ ;
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__item']} */ ;
/** @type {__VLS_StyleScopedClasses['uniform']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__media']} */ ;
/** @type {__VLS_StyleScopedClasses['uniform']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__img']} */ ;
/** @type {__VLS_StyleScopedClasses['uniform']} */ ;
/** @type {__VLS_StyleScopedClasses['badge']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__meta']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery__name']} */ ;
/** @type {__VLS_StyleScopedClasses['download']} */ ;
/** @type {__VLS_StyleScopedClasses['empty']} */ ;
// @ts-ignore
var __VLS_18 = __VLS_17;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            publicKey: publicKey,
            ctxProviderRef: ctxProviderRef,
            handleChangeEvent: handleChangeEvent,
            selectedApp: selectedApp,
            appNames: appNames,
            allVariants: allVariants,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        const __VLS_returns = {};
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
