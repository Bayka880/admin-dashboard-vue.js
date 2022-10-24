<template>
  <div class="border-solid">
    <button
      style="
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(250, 200, 100);
      "
    >
      Submit
    </button>
    <div class="container via-orange-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quo odit
      ipsum ducimus modi animi quibusdam labore suscipit cupiditate provident
      asperiores, dolore alias natus officia enim aperiam nisi. Rerum, dolore!
    </div>

    <nuxt-link to="/login" class="via-orange-700">Login</nuxt-link>
    <nuxt-link to="/register" class="via-orange-700">Register</nuxt-link>
    <nuxt-link :to="`/test/${id}`" @click="randomNumber"
      >button to dynamic page</nuxt-link
    >
    <div>{{ id }}</div>
    <button @click="randomNumber">click</button>
  </div>
</template>
<script>
export default {
  name: "MainPage",
  data() {
    return {
      id: "",
    };
  },
  methods: {
    randomNumber() {
      console.log(this.id);
      return (this.id = Math.floor(Math.random() * 11));
    },
  },
};
</script>
