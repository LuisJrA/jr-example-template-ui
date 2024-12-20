

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BYbpXR3z.js","_app/immutable/chunks/disclose-version.dKUYtt0a.js","_app/immutable/chunks/runtime.Dc5UdZNP.js","_app/immutable/chunks/legacy.C6kpHak8.js"];
export const stylesheets = [];
export const fonts = [];
