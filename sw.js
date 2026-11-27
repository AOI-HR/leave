// 最簡單的 service worker：不做離線快取（資料都要連線到 Apps Script），只是讓 Android 能「安裝應用程式」
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 直接走網路 */ });
