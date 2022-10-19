<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span><NuxtLink to="/" style="color:white">Dashboard</NuxtLink></span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>
           <nuxt-link to="/dataFetch" style="color:white">Data</nuxt-link>
          </span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="shop" /><span>Products</span></span>
          <a-menu-item key="3">
            Soft Drinks
          </a-menu-item>
          <a-menu-item key="4">
            Snack Crackers
          </a-menu-item>
          <a-menu-item key="5">
            Fruits
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="bar-chart" /><span>Income</span></span>
          <a-menu-item key="6">
            1 year
          </a-menu-item>
          <a-menu-item key="8">
            2 year
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <Nuxt/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Admin dashboard
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>