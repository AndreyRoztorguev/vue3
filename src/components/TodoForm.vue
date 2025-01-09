<script setup lang="ts">
import { ref } from 'vue'

const valid = ref(false)
const firstname = ref('')
const lastname = ref('')
const email = ref('')

const firstnameRules = [
  (v: string) => !!v || 'First Name is required',
  (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
]
const lastnameRules = [
  (v: string) => !!v || 'Last Name is required',
  (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
]
const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]

function submit() {
  valid.value = !!(firstname.value && lastname.value && email.value)
  console.log('Form Submitted:', {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
  })
}
</script>
<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="firstnameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :counter="10"
            :rules="lastnameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn class="mt-4" color="success" block @click="submit">Submit </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped></style>
