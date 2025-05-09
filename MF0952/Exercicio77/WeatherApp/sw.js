// Asignar nombre y version de la caché

const CACHE_NAME = 'v1_cache_amesweather';

// Ficheros a cachear en la aplicación

var urlsToCache = [
    './',
    './styles/style.css',
    './styles/bulma.min.css',
    './assets/favicons/favicon_16x16@1x.png',
    './assets/favicons/favicon_32x32@1x.png',
    './assets/favicons/favicon_48x48@1x.png',
    './assets/favicons/favicon_96x96@1x.png',
    './assets/favicons/favicon_152x152@1x.png',
    './assets/favicons/favicon_167x167@1x.png',
    './assets/favicons/favicon_180x180@1x.png',
    './assets/favicons/favicon_192x192@1x.png',
    './assets/favicons/favicon_512x512@1x.png',
];

// Evento install
//Que la web funcione sin conexiÓN
//instalación del service worker y guardar en caché los recursosestáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                        .then(() => {
                            self.skipWaiting();
                        })

            })
            .catch(err => {
                console.log( 'No se ha registrado el caché', err)
            })
    )
})


// Evento activate

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhitelist.indexOf(cacheName) === 1){
                        // Borrar elementos que no necesita
                        return caches.delete(cacheName);
                    }
                })
            )
        })
        .then(
            ()=>{
                //Activar cache

        self.clientInformation.claim();
    }
        )
    )
});

// Evento fetch

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                // devuelvo datos desde caché
                return res;
            }
            return fetch(e.request);
        })
    )
});