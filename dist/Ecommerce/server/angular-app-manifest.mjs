
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FreshCart/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/FreshCart"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/home"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/shop"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5DDAYFE2.js"
    ],
    "route": "/FreshCart/categories"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/brands"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/cart"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/wishlist"
  },
  {
    "renderMode": 1,
    "route": "/FreshCart/checkout/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WPR4IHW.js"
    ],
    "redirectTo": "/FreshCart/settings/main-page",
    "route": "/FreshCart/settings"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WPR4IHW.js"
    ],
    "route": "/FreshCart/settings/main-page"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WPR4IHW.js"
    ],
    "route": "/FreshCart/settings/main-page/hr"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WPR4IHW.js"
    ],
    "route": "/FreshCart/settings/main-page/sales"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4WPR4IHW.js"
    ],
    "route": "/FreshCart/settings/main-page/marketing"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/login"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/register"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/forgetPassword"
  },
  {
    "renderMode": 2,
    "route": "/FreshCart/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19355, hash: '211c2bf7e8ceea964f23b144152bdd54c382b374acdd63faf3f1336b3f7f1061', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1161, hash: 'e81ab617e553e6563ad0f2c592406a2171d497e6ea95f3e133a6fef328789bc8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'wishlist/index.html': {size: 36385, hash: 'b5568fc73c96bd5da1b612bc191a2e230e7c7fe8e7e97f0b04ecde7545dec711', text: () => import('./assets-chunks/wishlist_index_html.mjs').then(m => m.default)},
    'settings/main-page/marketing/index.html': {size: 36981, hash: 'ded6ab9eacaef3b2d23c5d178580fc3191ea06410e699c7350d1fb9bdeab0e98', text: () => import('./assets-chunks/settings_main-page_marketing_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 42577, hash: '314b85c1d2fead3df202ce8cf1a37bcc6d45bd84a5ce9d31d686427bd2d4f6ba', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 36372, hash: '42d7e927621f62a121aa45c75395fa34561e8c05fd3e5da78aa4d7b61e30f3b6', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 36379, hash: '0be4b19b22b500a84d1b4b7d9996b7363a2f1c8ceade58db0931ffa076d1cb55', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'settings/main-page/hr/index.html': {size: 36960, hash: '4badd7f14b8c84a81fdbb1ccb15a770d18f6724002a887d19df8f9bbc5b643fa', text: () => import('./assets-chunks/settings_main-page_hr_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 44879, hash: '6d64f1e11580675d11f26a9f72aa68facb695fac40747970b82f85395e18737a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 36443, hash: '3cf2c4e21ef890cf0b83ae0879587171bcc8789cf2b0cf7c6676cb6c1eb3cc6d', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'settings/main-page/sales/index.html': {size: 36969, hash: '80a6f16c5898e2a581e6ce0d8c18f96764ed2e7deb81ba4e59b9d3dd6556c380', text: () => import('./assets-chunks/settings_main-page_sales_index_html.mjs').then(m => m.default)},
    'settings/main-page/index.html': {size: 36894, hash: '5eddcacc4ddf9642938cb7c0bc564ce3598e5b7e540f0ba03f33948a4dfbeba3', text: () => import('./assets-chunks/settings_main-page_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 188470, hash: '82c8b4a3e2aa33abffc9270ce68c654eb4d0ab4cbb497283a5e5a393fc126759', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 188470, hash: '82c8b4a3e2aa33abffc9270ce68c654eb4d0ab4cbb497283a5e5a393fc126759', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'forgetPassword/index.html': {size: 43744, hash: 'd7134f4e27d671da03300c4faf1c81f4ff35ca3a44043180d5f326905e4c84bc', text: () => import('./assets-chunks/forgetPassword_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 42207, hash: '26127f2af9ed5ccb96cbddf3bcd0bcb452a9bf840777882e4d6e3f2c2aa4cf9e', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-PF57BVXV.css': {size: 180957, hash: 'GZhDZCdw120', text: () => import('./assets-chunks/styles-PF57BVXV_css.mjs').then(m => m.default)}
  },
};
