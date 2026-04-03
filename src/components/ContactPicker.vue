<script setup>
const getContacts = async () => {
  try {
    const contacts = await navigator.contacts.select(['name', 'email'], { multiple: true })
    alert(JSON.stringify(contacts))
  } catch (err) {
    alert('Impossible de récupérer les contacts : ' + err)
  }
}
</script>

<template>
  <div>
    <button class="btn" @click="getContacts">Choisir un contact</button>
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
