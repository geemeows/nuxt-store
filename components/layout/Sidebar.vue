<template>
  <a-layout>
    <a-layout-sider
      v-model="collapsed"
      class="sidebar"
      :trigger="null"
      collapsible
      breakpoint="lg"
      collapsed-width="80"
      :style="[
        !collapsed
          ? { maxWidth: '230px', width: '230px' }
          : { maxWidth: '80px' },
      ]"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click="navigate('/dashboard')">
          <a-icon type="dashboard" />
          <span>Dashboard</span>
        </a-menu-item>
        <a-menu-item key="2" @click="navigate('/new-product')">
          <a-icon type="plus" />
          <span>Add Product</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <slot />
  </a-layout>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    navigate(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss';
.sidebar {
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 10;
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.65),
        rgba($color-primary-dark, 0.65)
      ),
      url('../../assets/img/sidebar-bg.jpg');
    background-size: cover;
    background-position: top;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  min-height: 100vh;
  .ant-menu-dark {
    background: inherit;
    .ant-menu-item-selected {
      background-color: $color-secondary-light;
    }
    .ant-menu-sub {
      background: rgba($color-primary-light, 1);
    }
  }
}
</style>
