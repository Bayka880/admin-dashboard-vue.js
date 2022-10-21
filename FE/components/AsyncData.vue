<template>
  <div>
    <a-table :columns="columns" :data-source="users.data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
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
      <span slot="action" slot-scope="text, record" key="record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <button @click="() => handlerDelete(record._id)">Delete</button>
        <a-divider type="vertical" />
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "_id",
    key: "id",
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
  {
    title: "Action",
    key: "action",
    scopedSlots: {
      customRender: "action",
    },
  },
];
import axios from "axios";
export default {
  data() {
    return {
      columns,
    };
  },
  props: ["users"],
  methods: {
    handlerDelete(e) {
      axios
        .delete(`${process.env.BASE_URL}v1/user/delete/${e}`)
        .then((res) => console.log(res));
    },
  },
};
</script>
