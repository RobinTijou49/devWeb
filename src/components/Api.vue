<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchItems } from '../services/api.js'

const data = ref([])
const loading = ref(true)
const error = ref(null)
const search = ref('') // il manquait ça

// Récupération des données
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

// Filtrer les données selon le texte de recherche
const filteredData = computed(() => {
  if (!search.value) return data.value
  return data.value.filter((commune) =>
    commune.nom.toLowerCase().includes(search.value.toLowerCase()),
  )
})

onMounted(getData)
</script>

<template>
  <div>
    <h2>Liste des communes du 49</h2>

    <div v-if="loading">Chargement…</div>
    <div v-else-if="error">Erreur: {{ error }}</div>
    <div v-else>
      <input
        type="text"
        v-model="search"
        placeholder="Rechercher une commune..."
        style="
          margin-bottom: 10px;
          padding: 5px;
          width: 250px;
          border-radius: 15px;
          border: 1px solid var(--text);
          background-color: var(--bg);
          color: var(--text);
        "
      />

      <table cellspacing="0" cellpadding="5">
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
          <tr v-for="commune in filteredData" :key="commune.code">
            <td>{{ commune.nom }}</td>
            <td>{{ commune.code }}</td>
            <td>{{ commune.codesPostaux }}</td>
            <td>{{ commune.siren }}</td>
            <td>{{ commune.codeEpci }}</td>
            <td>{{ commune.codeDepartement }}</td>
            <td>{{ commune.codeRegion }}</td>
            <td>{{ commune.population }}</td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td colspan="8">Aucune commune trouvée.</td>
          </tr>
        </tbody>
      </table>
    </div>
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
  color: white;
}
td,
th {
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
}
</style>
