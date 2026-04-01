<template>
  <v-card class="contact-card">
    <h1>Contact</h1>

    <v-form v-model="valid" class="contact-form">
      <div class="row">
        <v-text-field
          v-model="firstname"
          label="First name"
          variant="outlined"
          required
          class="input"
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          label="Last name"
          variant="outlined"
          required
          class="input"
        ></v-text-field>
      </div>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        variant="outlined"
        required
        class="input"
      ></v-text-field>

      <v-textarea
        v-model="message"
        label="Message"
        variant="outlined"
        rows="4"
        class="input"
      ></v-textarea>

      <v-btn
        :disabled="!valid"
        :loading="loading"
        size="large"
        @click="submitForm"
        class="submit-btn"
        block
      >
        Send Message
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    emailRules: [
      (value) => !!value || 'E-mail is required.',
      (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
    ],
  }),
  methods: {
    submitForm() {
      alert('Form submitted!')
    },
  },
}
</script>

<style scoped>
.contact-card {
  width: 500px;
  max-width: 100%;
  padding: 30px;
  border-radius: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  font-weight: 600;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.row {
  display: flex;
  gap: 12px;
}

.input :deep(.v-field) {
  border-radius: 12px;
}

.submit-btn {
  margin-top: 10px;
  border-radius: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  transition: all 0.3s ease;
  background-color: rgb(83, 185, 219);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
</style>
