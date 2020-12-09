<template>
  <div class="dashboard">
    <div class="stats">
      <a-row :gutter="16">
        <a-col
          v-for="(card, i) in cards"
          :key="i"
          :xs="{ span: 24 }"
          :lg="{ span: 6 }"
          :md="{ span: 12 }"
        >
          <StatsCard
            :card-icon="card.cardIcon"
            :card-title="card.cardTitle"
            :card-value="card.cardValue"
            :last-updated="card.lastUpdated"
          />
        </a-col>
      </a-row>
    </div>
    <a-divider orientation="left"><strong>Your Products</strong></a-divider>
    <div class="products">
      <a-row type="flex" justify="space-between" align="bottom" :gutter="16">
        <a-col
          v-for="product in getProducts"
          :key="product.id"
          :xs="{ span: 24 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
        >
          <ProductCard
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :image="product.image"
            :description="product.description"
            :delete-item="deleteItem"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import StatsCard from '@/components/Cards/StatsCard'
import ProductCard from '@/components/Cards/ProductCard'
// import { getProducts } from '@/core/CRUD/crud.services'

export default {
  middleware: 'auth',
  layout: 'auth',
  components: {
    StatsCard,
    ProductCard,
  },
  data() {
    return {
      products: [],
      cards: [
        {
          cardTitle: 'Products',
          cardValue: '2,000',
          cardIcon: 'barcode',
          lastUpdated: '3hrs',
        },
        {
          cardTitle: 'Categories',
          cardValue: '150',
          cardIcon: 'tags',
          lastUpdated: '3hrs',
        },
        {
          cardTitle: 'Carts',
          cardValue: '73',
          cardIcon: 'shopping-cart',
          lastUpdated: '1hrs',
        },
        {
          cardTitle: 'Orders',
          cardValue: '22',
          cardIcon: 'shopping',
          lastUpdated: '1hrs',
        },
      ],
    }
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts
    },
  },
  async created() {
    await this.$store.dispatch('GET_PRODUCTS')
  },
  methods: {
    async deleteItem(id) {
      try {
        await this.$store.dispatch('DELETE_PRODUCT', id)
        this.$notification.open({
          message: 'Successful Action',
          description: 'Product deleted successfully',
          icon: <a-icon type="check-circle" style="color: #52c41a" />,
        })
      } catch (err) {
        this.$notification.open({
          message: 'Something went wrong',
          description: 'Could not delete the product!',
          icon: <a-icon type="close-circle" style="color: #f5222d" />,
        })
      }
    },
  },
}
</script>

<style lang="scss">
.stats {
  padding: 20px;
}
.products {
  @extend .stats;
}
</style>
