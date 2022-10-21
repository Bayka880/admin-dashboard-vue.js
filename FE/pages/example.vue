<template>
  <div>
    <AsyncData :users="data" />
  </div>
</template>
<script>
import AsyncData from "../components/AsyncData.vue";
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(`${process.env.BASE_URL}v1/user`);
    return { data };
  },
  components: { AsyncData },
};
</script>
