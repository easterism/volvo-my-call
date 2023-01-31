self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('vmc-store').then((cache) => cache.addAll([
        'index.html',
        
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });

  self.addEventListener("online",  function(){
    console.log("You are online!");
});
self.addEventListener("offline", function(){
    console.log("Oh no, you lost your network connection.");
});