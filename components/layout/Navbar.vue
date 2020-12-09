<template>
  <a-layout
    :style="[
      !collapsed
        ? { marginLeft: '230px', width: 'calc(100vw - 230px)' }
        : { marginLeft: '80px', width: 'calc(100vw - 80px)' },
    ]"
  >
    <a-layout-header
      class="navbar"
      :style="[
        !collapsed
          ? { width: 'calc(100vw - 230px)' }
          : { width: 'calc(100vw - 80px)' },
      ]"
    >
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="collapseSidebar()"
      />
      <span class="corps-name">Your Dashboard</span>
      <a-dropdown class="dropdown-list" :trigger="['click']">
        <a class="ant-dropdown-link">
          <a-avatar icon="user" size="small" />&nbsp;{{ getUser }}
        </a>
        <a-menu slot="overlay" style="margin-right: 0">
          <a-menu-item>
            <a href="#"> <a-icon type="setting" />&nbsp;Settings </a>
          </a-menu-item>
          <a-divider style="padding: 0; margin: 0" />
          <a-menu-item>
            <a style="cursor: pointer" @click="logout">
              <a-icon type="logout" />&nbsp;Logout
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-layout-header>
    <!-- View -->
    <slot />
  </a-layout>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapsed: this.collapse,
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser
    },
  },
  methods: {
    collapseSidebar() {
      this.collapsed = !this.collapsed
      this.$emit('changeCollapse', this.collapsed)
    },
    logout() {
      this.$store.dispatch('LOGOUT')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss';
.navbar {
  position: fixed;
  z-index: 10;
  background: #fff;
  padding: 0;
  box-shadow: 0 2px 5px rgba(0, 21, 41, 0.13);
  font-size: 18px;
  .corps-name,
  .dropdown-list {
    @include respond-below(md) {
      display: none;
    }
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .ant-dropdown-link {
    &.ant-dropdown-trigger {
      background-color: transparent;
      float: right;
      padding: 0 25px;
      font-size: 14px;
      color: #000;
      transition: background 0.3s ease-in-out;
      &:hover {
        background-color: rgba(170, 170, 170, 0.2);
      }
      @include respond-below(sm) {
        padding: 0 5px !important;
      }
    }
  }
}
</style>
