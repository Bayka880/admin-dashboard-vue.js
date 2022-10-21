<template>
  <div>
    <a-table :columns="columns" :data-source="users.data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="ID">ID</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "_id",
    key: "_id",
    slots: { title: "ID" },
    scopedSlots: { customRender: "id" },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Firstname",
    dataIndex: "firstname",
    key: "firstName",
  },
];

export default {
  data() {
    return {
      columns,
    };
  },
  props: ["users"],
};
</script>
