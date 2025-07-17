<template>
  <form @submit.prevent="handleRegister" class="space-y-4 p-4">
    <input v-model="username" placeholder="Username" class="input" />
    <input v-model="email" type="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Password" class="input" />
    <button type="submit" class="btn">Register</button>
    <p v-if="error" class="text-red-500">Error: {{ error.message }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { REGISTER_MUTATION } from "@/graphql/auth";

const username = ref("");
const email = ref("");
const password = ref("");
const { mutate: register, error, onDone } = useMutation(REGISTER_MUTATION);

function handleRegister() {
  register({
    username: username.value,
    email: email.value,
    password: password.value,
  });
}

watch(error, (e) => {
  if (e) {
    console.error("Registration error:", e);
  }
});

onDone(({ data }) => {
  console.log("Registered user:", data?.createUser);
  // Optional: redirect or clear form here
});
</script>

<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
}
.btn {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
