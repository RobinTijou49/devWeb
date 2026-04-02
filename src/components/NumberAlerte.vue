<script setup>
import { ref, watch, onMounted } from 'vue'

const alerts = ref(3) // nombre d'alertes

// Mettre à jour le badge de l'app à chaque changement du nombre d'alertes
watch(
  alerts,
  (newValue) => {
    if ('setAppBadge' in navigator) {
      if (newValue > 0) {
        navigator.setAppBadge(newValue).catch(console.error)
      } else {
        // Effacer le badge s'il n'y a plus d'alertes
        navigator.clearAppBadge().catch(console.error)
      }
    }
  },
  { immediate: true },
)
</script>

<template>
  <div style="position: relative; display: inline-block">
    <button @click="alerts++">Ajouter une alerte</button>
    <button @click="alerts = 0">Supprimer les alertes</button>
    <i class="fa fa-bell" style="font-size: 24px"></i>
    <span
      v-if="alerts > 0"
      style="
        position: absolute;
        top: -8px;
        right: -8px;
        background: red;
        color: white;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      "
    >
      {{ alerts }}
    </span>
  </div>
</template>
