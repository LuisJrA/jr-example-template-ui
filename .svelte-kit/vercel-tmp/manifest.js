export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.R9Yk7V_Y.js","app":"_app/immutable/entry/app.B1BJ7TfJ.js","imports":["_app/immutable/entry/start.R9Yk7V_Y.js","_app/immutable/chunks/entry.DFVcOOeR.js","_app/immutable/chunks/runtime.Dc5UdZNP.js","_app/immutable/chunks/index-client.pIKkepWz.js","_app/immutable/entry/app.B1BJ7TfJ.js","_app/immutable/chunks/runtime.Dc5UdZNP.js","_app/immutable/chunks/render.DVfBv4OD.js","_app/immutable/chunks/disclose-version.dKUYtt0a.js","_app/immutable/chunks/index-client.pIKkepWz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
