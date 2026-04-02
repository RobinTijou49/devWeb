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
    <button @click="share">Partager</button>
  </div>
</template>
