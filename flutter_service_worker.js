'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "f37434520b049df5fc2461860fe08736",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "196b87b439e4dbcff519ebdb4c12b4a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "294f2195b18a1098cdbe59af6a5b50e2",
".git/logs/refs/heads/main": "385008367b4d012ded208dd4fc06ec6f",
".git/objects/07/cf990c442fa7921a630d08ba542370e17eaabb": "8f98dda2cfc206db9be7a511a7b70443",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/b799b9d9961ecc36de927a3bc5193b77998b42": "845b3d7e0f48f9f9e84f7a2a803b8230",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/24/90c4c146f64db294c44c32e16fbdc653fec427": "688ca800d00b6d2e90246b974e26977c",
".git/objects/27/769cd424f766f8b1119200f9765003d3a0e3c7": "f35e545c1e3e161e59176c276dab07bd",
".git/objects/2a/ca3618179bdef06ac879440041f5524f6337ca": "d744c5a1298dd33700401c7d457f9a9f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/7402b2b7ff3127db1eade52791a196333e8761": "907ccb8b4c6c0268810b0d50c3069577",
".git/objects/35/bfac1e36fb3f620558b4420491240a8b819e80": "4f414b67b71eb17ae705fd908dc047db",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/33aa3481c2c25bef1cdea63c6b1d2347ac82b5": "79a3a11a6c7f84f470d556c245e318c6",
".git/objects/4c/15bd779bceb93fcc8bf2ba08b8e1587892cef5": "a200bd652460b66d1cf0be326068ffc0",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/70/e2a279eff6b98c31cf62a4c8fe15ae2708f1d4": "7b7782253e16721c4eaa2c264aa7e728",
".git/objects/77/fef0d80529e01bb1e1f77b24611fa9ee3b9831": "fe6ac9c6f8fc81f397cbb022d201a733",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2fb6267faf7adcf21de1bdae56475f8285f760": "db92afaaf5df9ebf074a084443fbd7e0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/64b0b8f1d56bea25a7790052af8ef41836e0e3": "0dc7116400a7959926cc0ce19d85834d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/bd09cbee3a7bd99f8120d757f6402726818a83": "7618e2e4ae0e6e7a87b3d9d9613d9595",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/1b8df04b61f3135184061fe9d8ee2d6f34e041": "277865cc21f7116e3decb01f5c6b2881",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/45c1f87e1fe3a23dcd773e58c7ef6f147ca317": "583d13e34afa7fab2fc3fc1ba729edfe",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/c7b1b4acfbbe370f94e80c8b5705ffc0a5efe5": "581d16da05e05ae110e786dc534cf5bd",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/d48e9e10cc8d1adb8c912b10e5d9920f0b113c": "ab63c4f6d003b76ae2e60f714a105758",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5f00a9aa0a5b0fad45bf5cf98c9c20132440d4": "dd8ab0052062871313805b218f4aaab7",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/50973bd4d0030f06779cc419f7b15689d661c2": "a2a1c11409420dd0aa10e60200fb1254",
".git/objects/ee/85baab7423cd624237aeab48b1b8c6f0d21cda": "bb8f6080a76c19723ba5d216e83b164a",
".git/refs/heads/main": "9e2e5ad1ef4f74a7b4fc56197b46c91d",
"assets/AssetManifest.json": "5fd2c9da838f6c6ecded47df3d556b80",
"assets/assets/animation/switch_daytime.flr": "7530828e9a6ad38f86475fc17fc578ee",
"assets/assets/github.png": "916a4c8e32b382173958773530b976bf",
"assets/assets/linkedin.png": "0bfb93859851716cdc67c32f8ab795a3",
"assets/assets/login.json": "6698c8f5b1fa237b8c9095b94c277d79",
"assets/assets/okoul.png": "201f0f123ad64d64fcdb46c462ccb819",
"assets/assets/Resume_Issa_Jaber_Alhilali.pdf": "88f4f4b8383929df7c555bfd395bae0d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/lang/ar.json": "27c103eb68fb8022b3f252c275cbdd34",
"assets/lib/lang/en.json": "c329db6fca25ce862e09c4e6e16a27b0",
"assets/NOTICES": "3fd0b3d7be794c6b6428700dd9c66668",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "13334fdfba87b24939cd7dcfa84c3c60",
"/": "13334fdfba87b24939cd7dcfa84c3c60",
"main.dart.js": "480d157d804af7de64cc728457dd635d",
"manifest.json": "713146fb871a6dd6d74abce8d26d75bc",
"version.json": "be39a1414cb2487efdd7efc4f77e7453"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
