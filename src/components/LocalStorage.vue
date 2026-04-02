<script setup>
import { ref, onMounted } from 'vue'

const keyName = 'hello'
const inputValue = ref('')
const savedValue = ref('')

// Charger la valeur au montage
onMounted(() => {
  savedValue.value = localStorage.getItem(keyName) || ''
})

// Sauvegarder dans le stockage local
const save = () => {
  localStorage.setItem(keyName, inputValue.value)
  savedValue.value = inputValue.value
}

// Supprimer la valeur
const remove = () => {
  localStorage.removeItem(keyName)
  savedValue.value = ''
}
</script>

<template>
  <div>
    <h3>Stockage interne (localStorage)</h3>
    <input v-model="inputValue" placeholder="Écrire quelque chose..." />
    <button @click="save">Sauvegarder</button>
    <button @click="remove">Supprimer</button>
    <p>Valeur sauvegardée : {{ savedValue }}</p>
  </div>
</template>
