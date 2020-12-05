<template>
  <Sidebar :collapsed="collapsed">
    <Navbar :collapse="collapsed" @changeCollapse="changeSidebarStatus">
      <div class="container">
        <Nuxt />
      </div>
    </Navbar>
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar'
import Navbar from '@/components/layout/Navbar'

export default {
  components: {
    Sidebar,
    Navbar,
  },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    changeSidebarStatus(payload) {
      this.collapsed = payload
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 64px;
  min-height: calc(100vh - 64px);
  padding: 36px;
}
</style>
