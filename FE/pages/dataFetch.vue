<template>
 <div>
<p v-if="$fetchState.pending">Loading</p>
<div>
    <div v-for="(user,index) in users.data" :key="index">{{user.email}}</div>
</div>

 </div>
</template>
<script>
export default {
    data(){
        return {
            users:""
        }
    },
    async fetch(){
        this.users= await fetch(`${process.env.BASE_URL}v1/user`).then(res => res.json())
        console.log(this.users.data)
    }
}
</script>
