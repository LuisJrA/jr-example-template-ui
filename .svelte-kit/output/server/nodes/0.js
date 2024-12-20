

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5Xw3ELcb.js","_app/immutable/chunks/disclose-version.BR8yLcuz.js","_app/immutable/chunks/runtime.DNVc5yM7.js"];
export const stylesheets = ["_app/immutable/assets/0.D9Pma_1V.css"];
export const fonts = [];
