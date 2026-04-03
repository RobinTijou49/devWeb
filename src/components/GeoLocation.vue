<script setup>
import { ref } from 'vue'

const position = ref({ lat: null, lon: null })

const getLocation = () => {
  if (!navigator.geolocation) return alert('Géolocalisation non supportée')

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      position.value.lat = pos.coords.latitude
      position.value.lon = pos.coords.longitude
    },
    (err) => {
      alert('Erreur de géolocalisation: ' + err.message)
    },
  )
}
</script>

<template>
  <div>
    <button class="btn" @click="getLocation">Obtenir ma position</button>
    <p v-if="position.lat">Latitude: {{ position.lat }}, Longitude: {{ position.lon }}</p>
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
