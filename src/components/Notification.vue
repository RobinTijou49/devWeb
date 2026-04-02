<script setup>
const sendNotification = () => {
  if (!('Notification' in window)) return alert('Notifications non supportées')

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      new Notification('Hello !', {
        body: 'Ceci est une notification depuis Vue',
      })
    }
  })
}
</script>

<template>
  <div>
    <h3>Notification</h3>
    <button @click="sendNotification">Envoyer une notification</button>
  </div>
</template>
