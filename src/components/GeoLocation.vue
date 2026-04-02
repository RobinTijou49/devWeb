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
    <h3>Géolocalisation</h3>
    <button @click="getLocation">Obtenir ma position</button>
    <p v-if="position.lat">Latitude: {{ position.lat }}, Longitude: {{ position.lon }}</p>
  </div>
</template>
