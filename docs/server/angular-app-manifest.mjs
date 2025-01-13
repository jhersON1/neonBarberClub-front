
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/neonBarberClub-front/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2244, hash: 'afd66fde342cb45d6cd758e387d4b6b8643c1740f566baa4f4de601594b49cdf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '8b7e28fb5ade58a351fdd0fc66472e1f89961ffaa7e41ccf618e55626edf7c32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IHV67PN4.css': {size: 15132, hash: '7Qi3DWNRjCE', text: () => import('./assets-chunks/styles-IHV67PN4_css.mjs').then(m => m.default)}
  },
};
