<script setup>
const sendNotification = () => {
  if (!('Notification' in window)) return alert('Notifications non supportées')

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      new Notification('Hello !', {
        body: 'Notification depuis Vue',
      })
    }
  })
}
</script>

<template>
  <div>
    <button class="btn" @click="sendNotification">Envoyer une notification</button>
  </div>
</template>

<style scoped>
.btn {
  padding: 10px 20px;
  margin-right: 3px;
  border: none;
  border-radius: 20px;
  background-color: #2563eb;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
</style>
