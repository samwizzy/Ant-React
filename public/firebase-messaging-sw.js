importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCfiDByZ08uF99UWtiRRIixEn5xS88n9lE",
    authDomain: "firereact-f77a9.firebaseapp.com",
    databaseURL: "https://firereact-f77a9.firebaseio.com",
    projectId: "firereact-f77a9",
    storageBucket: "firereact-f77a9.appspot.com",
    messagingSenderId: "397485737172",
    appId: "1:397485737172:web:86d028fd801292485f2741",
    measurementId: "G-8TEG8TBSQ0"
});

console.log("I have just reached the firebase messaging service worker")
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: 'https://antreact.netlify.app/firebase-logo.png'
    };

    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return self.registration.showNotification(notificationTitle,
                notificationOptions);
        });
    return promiseChain;
});

self.addEventListener('notificationclick', function (event) {
    let url = 'https://antreact.netlify.app/';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});