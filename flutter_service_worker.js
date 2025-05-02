'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f41191bb585c1ce8dcdea2d25fbaea8a",
".git/config": "766a0238ecd070f7ea53dd21d30b2e4f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5965f6063beb701b71fb61a7eb8d1ca1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90c466e220f4a335c6c6a95aec2e5b7e",
".git/logs/refs/heads/gh-pages": "90c466e220f4a335c6c6a95aec2e5b7e",
".git/logs/refs/remotes/origin/gh-pages": "b17b11be6e773a6db02c045a8b8cda05",
".git/objects/04/a38f483d63b678ad738ca6a0f989dd3645a554": "10f27a6ff4ed1be38ab6690c0f841603",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/19/b2282bd8e0960f9ff9e6c2f5103db746cf5c9f": "32e82f7fd713453e375af681a0968f6b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/6f7080bccd35794f0f3d3ee48293c9c447b2f6": "8122942953f83c2798595de7440f7bcb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/c9b2c5d6d27ee672a177ab65490d357c77be71": "69521844ef9ed46c89e2b31e83348f6b",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/b65d2c71ce1b5ef62c658497e3eb67b4770bb9": "e727a4c86fd535e10f2c648da15132b9",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/f4a6c50fa3ca8ccf7b713ac906e5b89c85d43b": "c8e6e9ab81aa7b2606b1b1ff2c10ed25",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/313c78d97601e31ae64f1e30b4f2e07a0aa4b7": "27b1f4e2a0d67bb44d491a43a6d220dd",
".git/objects/4a/af1ba7335f4bf2de5dde702c8e16aad84d4882": "370f4f01b774ff16a068bb49d91ef32b",
".git/objects/4b/878c15eacc5a9961f1dbf5d64a54f76e9eb4bc": "b419cb031dfbd2b25295b63b465366f5",
".git/objects/4f/21db307e66463d05b7ff2acee9141b128d96da": "0212d1d57e037111559c76dcfb247e80",
".git/objects/50/3c58ca629550d5a8d71a6b7d0134f38db33ccf": "df0b7a963425d2c24c464dda67994645",
".git/objects/54/60c9aa1d46f3528116fc8342780bfa0d098c6d": "42e8da14c60ced0a035136b29eb58fc5",
".git/objects/59/3b7651851cb83d0f41e62b927db02a0042aad8": "7aed9955edf31628e9d7a0b5d4df4da7",
".git/objects/61/9d8801ea9f9a8142cc9381be3709a8594444af": "a5273f3f3c8c7e2582fb65eece5161fb",
".git/objects/66/f2582fee09611a047027cfa894243a20dc458d": "444faffba46aef6461556d7b22b19249",
".git/objects/67/52360fab1bb7a7eaf606b94b476a7168ceae80": "c5dc50708c9095d02fd475b9625ea69c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/8f6d1a51b1519db981f04595da0b7436e52f1a": "35dfcf3519e273a7d721c55964d63c32",
".git/objects/73/76e8f50d6553d05ee940638f70cee00393bba1": "0adc6a9661f34b21b80dcd19c5d0fd9c",
".git/objects/75/0a2e00abfea86ccfff2bfbed51cc4df99c5f8d": "6dffd217acc92737884a0fedbc9d2043",
".git/objects/78/3ebd91cb158134920017b40f45ab62ff9ddf0b": "31f7ac6d44a47116c01bf909fb2cada8",
".git/objects/7b/7eae98d5958537a8d88eb08800b7ce4b6c9612": "4b74499fd2b0d2bcc5d8b308748aeab8",
".git/objects/80/fe0c64fd83b6cb4f3a47abd76a565e31b6529e": "b6432b5976ab6254dbc257b74f9a2fa8",
".git/objects/81/fce2f65253bec7b8eab53ee55ae1045ca5b329": "d9e24845fb228b4dea3ea84e7f3b628f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/3a313543889694a69d85a42df5fcf83b5b7fa4": "c1e8c5f9e9deccbd09e88478ee4be49d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/d8d5ec6217d34afff2165bd888a1b9d1edec4e": "282a52447580f30c5803d94088eca688",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/2efcfe306796465c88802aa202198c12f7bca0": "82e4de090ac194871b13df449e31ddc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1e64ad72b1e72ee7d44e0d8317066a62e5cd97": "fb519273dc16a7bdef3017735e523071",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/e228e6b5f1c947e214dbf2d1bfbd4313b7bc76": "7640c8f77151b608fd14c8d2595c82c6",
".git/objects/bf/f1c68b729b7de9c7735c68d47566204833772e": "adbb4464ab245048d116bfe517dc73fb",
".git/objects/ca/4c173da12af83e8bb1a34f8b329dabe13ee7be": "c36e3a4f30b7d6f274243470c29e1268",
".git/objects/ca/8aaa24cbb4b645c51c7986477d3824e25b597c": "b5b3ecebce8c79e0c5a12ae56cd53672",
".git/objects/ce/0eb9c844aedf7a55238306b77ccf5e3003b6ed": "0b46d3555282348940ede4fa51073f22",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/30cf2e235cf2d1d0b5e36ce2a7af092a6c57a2": "83b460622617312985420d7df39649b2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/7dea7fefff3f6dff1b2becd5f0be4bd66a2de2": "30849d13cbb2f0fbfa4c85ffcfb0245b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/496ae714c5d92b81268f085729d0eab5b1a58a": "0031bc2a618e4f05cf43d9da56af2d15",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/7a84a64e6cdc15ae89b214e1877f1cdb40206e": "51afcad5f3ee0816bf5576ffdd50f18c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/eb3ca68c3cdbace5a9b5ca66dab5ad90f71bf9": "71ec4254b0bd0c2967358f3f77b574a5",
".git/refs/heads/gh-pages": "aab2e2ce6d28d8a2b7c8aea91b39b788",
".git/refs/remotes/origin/gh-pages": "aab2e2ce6d28d8a2b7c8aea91b39b788",
"assets/AssetManifest.bin": "1b45ad5bde42df14dc7df98e9b56c3ab",
"assets/AssetManifest.bin.json": "0863b67d3d1f5f8aebba6a6e7cf10f28",
"assets/AssetManifest.json": "480e647bf1737fd37f119fba0cccf94e",
"assets/assets/background.json": "cb5da4f30360c47183a86ab1e767da22",
"assets/assets/backgroundtwo.json": "28e3194cdaf4d7b52ca8c335138b99da",
"assets/assets/bg.gif": "0affe967fc35608e079e582019b5e9f9",
"assets/assets/coin.json": "e2f2166112725fafff6f159909b8d759",
"assets/assets/confit.json": "96343340899b43729144928705e04825",
"assets/assets/cross.json": "136785125b2e0a79c78b2c0ff89386c2",
"assets/assets/hart.json": "9d117df364c4c266c13b0cea8ed8921f",
"assets/assets/hart1.json": "fb4d1280c5483d4389ed236bcebe1d52",
"assets/assets/logoemo.json": "2b21314b5e1b49ae1808f0655e0e2307",
"assets/assets/next.json": "695f9f8718a997f5781813f8923100d8",
"assets/assets/quiz.png": "435ea090a7f39c93188998649ad87861",
"assets/assets/rain.json": "f4edd378090c5f7f21acebb83fedb33f",
"assets/assets/SamuraiBlast-YznGj.ttf": "0bbc24f4e4bd21b09418677918b9fa81",
"assets/assets/score.json": "0d8aeabaa8c56348ba4add83cbc9e683",
"assets/assets/skip.json": "cf0304aef61d422d6f24ffc7975e744f",
"assets/assets/skipped.json": "e51ff6cef8faa687641b3639151d9925",
"assets/assets/sl.json": "31a5a08ad162ccbef3a6eb9c47cee5e6",
"assets/assets/startcounter.json": "a757708effe7be0d0244d20cd70b732e",
"assets/assets/think2.json": "b8d64a21e3e190effe0da342be858be3",
"assets/assets/thinkemoji.json": "31a5a08ad162ccbef3a6eb9c47cee5e6",
"assets/assets/two.json": "cadffa409e044df013308faf24f1d48b",
"assets/FontManifest.json": "11fdade8ad2c454271b87108d2fd5473",
"assets/fonts/MaterialIcons-Regular.otf": "9e301bfb5e7d16e7a6945ad6f622cbd8",
"assets/NOTICES": "d3e279878c445717627acc9f92452e3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "905bf962ce7dc67a06ae5fcfd694d55d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd02573140c170d558afcc11fd3f5d97",
"/": "cd02573140c170d558afcc11fd3f5d97",
"main.dart.js": "11f980e123aa49179bad559130fd03eb",
"manifest.json": "6027d0c29298b3ba156e5152b13aff06",
"version.json": "db9b455094bb834fa4b58fd29e7fc261"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
