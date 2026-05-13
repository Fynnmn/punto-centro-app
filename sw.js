self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'PUNTO Centro Fitness', {
      body: data.body || '',
      icon: 'assets/logo-punto.png',
      badge: 'assets/logo-punto.png',
      tag: data.tag || 'punto-notif',
      data: data,
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
