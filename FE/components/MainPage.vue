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
  </div>
</template>
<script>
export default {
  name: "MainPage",
};
</script>
