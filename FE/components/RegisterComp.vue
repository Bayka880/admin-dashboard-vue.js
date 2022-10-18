<template>
  <form @submit.prevent="registerHandler">
    <input
      type="text"
      class="border"
     id="firstName"
      v-model="formData.firstname"
      placeholder="Firstname"
    />
    <input
      type="text"
      placeholder="Email address"
  id="email"
      v-model="formData.email"
    />
    <input
      type="password"
      class="border"
      placeholder="password"
   id="password"
      v-model="formData.password"
    />
    <button class="bg-indigo-500 border-r-4">Submit</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      formData: {
        firstname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registerHandler() {
        console.log(this.formData)
      axios
        .post(`${process.env.BASE_URL}v1/user/register`, this.formData)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
