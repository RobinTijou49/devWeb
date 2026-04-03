<script setup>
const shareData = {
  title: 'Youtube',
  text: 'Regarde cette démo !',
  url: 'https://youtube.com',
}

const share = async () => {
  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch (err) {
      alert('Erreur de partage : ' + err)
    }
  } else {
    alert('Partage non supporté sur ce navigateur')
  }
}
</script>

<template>
  <div>
    <button class="btn" @click="share">Partager</button>
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
