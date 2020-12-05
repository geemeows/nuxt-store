<template>
  <div class="new-product">
    <NewProductForm />
  </div>
</template>

<script>
import NewProductForm from '@/components/NewProductFrom'
export default {
  layout: 'auth',
  components: {
    NewProductForm,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.new-product {
  padding: 20px;
}
</style>
