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
    <h3>Contact Picker</h3>
    <button @click="getContacts">Choisir un contact</button>
  </div>
</template>
