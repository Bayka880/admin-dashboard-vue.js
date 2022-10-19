<template>
  <div class="grid grid-cols-3 gap-0 h-max">
    <div class="col-span-2">
      <img src="../store/Images/store.jpg" alt="store" />
    </div>
    <div>
      <!-- <div class="logo"><img src="../store/Images/logo.jpg" class="w-1/4 rounded-full mx-auto" alt=""></div> -->
      <div class="flex flex-col items-center mt-56">
        <div class="font-bold text-xl">LOGIN</div>
        <form @submit.prevent="loginHandler" class="flex flex-col">
          <label for="email">Email</label>
          <input
            type="text"
            class="w-56 border rounded-lg mt-2 h-8 pl-3"
            v-model="formData.email"
          />
          <label for="password" class="mt-4">Password</label>
          <input
            type="password"
            class="w-56 border rounded-lg mt-2 h-8 pl-3"
            v-model="formData.password"
          />
          <button
            class="hover:bg-amber-400 rounded-lg w-56 mt-6 items-center bg-amber-200 h-8 font-bold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
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
        .then((res) => {
          if (res.data.message === "success") {
            
          }
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
