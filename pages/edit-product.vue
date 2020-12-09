<template>
  <div class="new-product">
    <NewProductForm :product="product" />
  </div>
</template>

<script>
import NewProductForm from '@/components/NewProductFrom'
export default {
  layout: 'auth',
  // middleware: 'auth',
  components: {
    NewProductForm,
  },
  data() {
    return {
      product: {},
    }
  },
  async created() {
    const product = await this.$store.dispatch(
      'GET_PRODUCT',
      this.$route.query.id
    )
    this.product = product
  },
}
</script>

<style lang="scss">
.new-product {
  padding: 20px;
}
</style>
