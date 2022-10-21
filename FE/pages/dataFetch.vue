<template>
  <div>
    <p v-if="$fetchState.pending">Loading</p>
    <div>
      <div v-for="(user, index) in users.data" :key="index">
        <div class="flex justify-around">
          <div>{{ user.email }}</div>
          <div>{{ user.firstname }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AsyncData from "../components/AsyncData.vue";
export default {
  data() {
    return {
      users: "",
    };
  },
  async fetch() {
    this.users = await fetch(`${process.env.BASE_URL}v1/user`).then((res) =>
      res.json()
    );
  },
};
</script>
