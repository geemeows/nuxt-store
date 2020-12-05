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
      <a-row :gutter="16">
        <a-col
          v-for="(card, i) in cards"
          :key="i"
          :xs="{ span: 24 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
        >
          <ProductCard />
        </a-col>
        <a-col
          v-for="(card, i) in cards"
          :key="i"
          :xs="{ span: 24 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
        >
          <ProductCard />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import StatsCard from '@/components/Cards/StatsCard'
import ProductCard from '@/components/Cards/ProductCard'
import { accounts } from '@/static/data/accounts.json'

export default {
  layout: 'auth',
  components: {
    StatsCard,
    ProductCard,
  },
  data() {
    return {
      accounts,
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
