import { NetworkFirst } from 'workbox-strategies';
import { cacheNames } from 'workbox-core';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { precacheAndRoute, getCacheKeyForURL } from 'workbox-precaching';

const isNav = event => event.request.mode === 'navigate';

const NETWORK_HANDLER = new NetworkFirst({
    // this cache is plunged with every new service worker deploy so we dont need to care about purging the cache.
    cacheName: cacheNames.precache,
    networkTimeoutSeconds: 5, // if u dont start getting headers within 5 sec fallback to cache.
    plugins: [
        new CacheableResponsePlugin({
            statuses: [200], // only cache valid responses, not opaque responses e.g. wifi portal.
        }),
    ],
});

/**
 * Adding this before `precacheAndRoute` lets us handle all
 * the navigation requests even if they are in precache.
 */
registerRoute(({ event }) => isNav(event), NETWORK_HANDLER);

setCatchHandler(({ event }) => {
    if (isNav(event)) {
        return caches.match(getCacheKeyForURL('/index.html'));
    }
    return Response.error();
});

precacheAndRoute(self.__WB_MANIFEST);
