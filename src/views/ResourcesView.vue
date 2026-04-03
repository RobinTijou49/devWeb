<script setup>
import LocalStorage from '../components/LocalStorage.vue'
import Notification from '../components/Notification.vue'
import NumberAlerte from '@/components/NumberAlerte.vue'
import Share from '@/components/Share.vue'
import ContactPicker from '@/components/ContactPicker.vue'
import GeoLocation from '@/components/GeoLocation.vue'
import TouchEvent from '@/components/TouchEvent.vue'
</script>

<template>
  <main class="resources-container">
    <section class="resource-section">
      <h2 class="section-title">Local Storage</h2>
      <div class="section-content">
        <LocalStorage />
      </div>
    </section>

    <section class="resource-section">
      <h2 class="section-title">Notifications</h2>
      <div class="section-content">
        <Notification />
      </div>
    </section>

    <section class="resource-section">
      <h2 class="section-title">Nombre d'alertes</h2>
      <div class="section-content">
        <NumberAlerte />
      </div>
    </section>

    <section class="resource-section">
      <h2 class="section-title">Partage</h2>
      <div class="section-content">
        <Share />
      </div>
    </section>

    <section class="resource-section">
      <h2 class="section-title">Contact Picker</h2>
      <div class="section-content">
        <ContactPicker />
      </div>
    </section>

    <section class="resource-section">
      <h2 class="section-title">Géolocalisation</h2>
      <div class="section-content">
        <GeoLocation />
      </div>
    </section>

    <section class="resource-section">
      <h2 class="section-title">Touch Events</h2>
      <div class="section-content">
        <TouchEvent />
      </div>
    </section>
  </main>
</template>

<style scoped>
.resources-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.resource-section {
  border: 1px solid var(--text);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.resource-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.section-title {
  color: var(--text);
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-content {
  padding: 1.5rem;
}
</style>
