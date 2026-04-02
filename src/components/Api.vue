<script setup>
import { ref, onMounted } from 'vue'
import { fetchItems } from '../services/api.js'

const data = ref([])
const loading = ref(true)
const error = ref(null)

const getData = async () => {
  loading.value = true
  error.value = null
  try {
    data.value = await fetchItems()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(getData)
</script>

<template>
  <div>
    <h2>Liste des communes du 49</h2>

    <div v-if="loading">Chargement…</div>
    <div v-else-if="error">Erreur: {{ error }}</div>
    <table v-else cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Code</th>
          <th>Codes Postaux</th>
          <th>Siren</th>
          <th>Code EPCI</th>
          <th>Code Département</th>
          <th>Code Région</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="region in data" :key="region.code">
          <td>{{ region.nom }}</td>
          <td>{{ region.code }}</td>
          <td>{{ region.codesPostaux }}</td>
          <td>{{ region.siren }}</td>
          <td>{{ region.codeEpci }}</td>
          <td>{{ region.codeDepartement }}</td>
          <td>{{ region.codeRegion }}</td>
          <td>{{ region.population }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ccc;
}
th {
  background-color: #493a3a;
}
td,
th {
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
}
</style>
