export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","hero.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.6ZNnczzf.js","app":"_app/immutable/entry/app.B7dBGeRU.js","imports":["_app/immutable/entry/start.6ZNnczzf.js","_app/immutable/chunks/entry.Aubk0Lfm.js","_app/immutable/chunks/runtime.DNVc5yM7.js","_app/immutable/chunks/index-client.zJt3KhXX.js","_app/immutable/entry/app.B7dBGeRU.js","_app/immutable/chunks/runtime.DNVc5yM7.js","_app/immutable/chunks/render.DtjekbB4.js","_app/immutable/chunks/disclose-version.BR8yLcuz.js","_app/immutable/chunks/if.lzyaTz7g.js","_app/immutable/chunks/index-client.zJt3KhXX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
