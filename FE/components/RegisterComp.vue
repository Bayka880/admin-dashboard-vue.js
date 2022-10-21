<template>
  <div class="grid grid-cols-3 gap-0 h-screen">
    <div class="col-span-2">
      <img src="../store/Images/store.jpg" alt="" class="h-screen">
    </div>
    <div class="flex flex-col items-center align-middle pt-56">
      <form @submit.prevent="registerHandler" class="flex flex-col" >
        <p class="font-bold text-center">Register</p>
        <input
          type="text"
          class="border w-56 rounded-lg h-8 pl-3 mt-3 after:border-amber-500"
          id="firstName"
          v-model="formData.firstname"
          placeholder="Firstname"
        
        />
       
        <input
          type="text"
          placeholder="Email address"
          id="email"
          class="border w-56 rounded-lg h-8 pl-3 mt-3"
          v-model="formData.email"
        />
        
        <input
          type="password"
          class="border w-56 rounded-lg h-8 pl-3 mt-3"
          placeholder="Password"
          id="password"
          v-model="formData.password"
        />
        <button class="bg-amber-400 w-56 rounded-lg h-8 mt-3">Submit</button>
        <button class="mt-3 text-gray-400" @click="$router.push('/login')">back</button>
      </form>
    </div>
  </div>
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
      console.log(this.formData);
      axios
        .post(`${process.env.BASE_URL}v1/user/register`, this.formData)
        .then((res) => {
          if(res.data.message === "successfull"){
            this.$router.push("/")
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
