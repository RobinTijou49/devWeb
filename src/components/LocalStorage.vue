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
    <input v-model="inputValue" placeholder="Écrire quelque chose..." />
    <button @click="save" class="btn">Sauvegarder</button>
    <button @click="remove" class="btn btn-danger">Supprimer</button>
    <p>Valeur sauvegardée : {{ savedValue }}</p>
  </div>
</template>

<style scoped>
input {
  padding: 10px;
  border: 1px solid var(--text);
  border-radius: 15px;
  margin-right: 10px;
  width: 250px;
  background-color: var(--bg);
}

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

.btn:hover {
  background-color: #1d4ed8;
}

.btn-danger {
  background-color: #dc2626;
}

.btn-danger:hover {
  background-color: #b91c1c;
}
</style>
