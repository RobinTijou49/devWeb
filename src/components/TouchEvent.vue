<script setup>
import { ref } from 'vue'

const message = ref('Touchez la zone ci-dessous')
const handleTouch = (event) => {
  message.value = `Touché : ${event.touches.length} doigt(s)`
}
</script>

<template>
  <div>
    <h3>Touch event</h3>
    <div
      @touchstart="handleTouch"
      style="
        width: 200px;
        height: 100px;
        background: var(--bg);
        border: 1px solid #ccc;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text);
      "
    >
      {{ message }}
    </div>
  </div>
</template>
