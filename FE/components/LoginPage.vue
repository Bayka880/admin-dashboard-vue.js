<template>
  <div>
    <form @submit.prevent="loginHandler">
      <input type="text" class="border" v-model="formData.email" />
      <input type="password" class="border" v-model="formData.password" />
      <button class="bg-indigo-500 border-r-4">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginHandler() {
      axios
        .post(`${process.env.BASE_URL}v1/user/login`, this.formData)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    },
  },
};
</script>
