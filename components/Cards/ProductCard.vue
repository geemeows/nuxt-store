<template>
  <a-card class="product" hoverable>
    <img slot="cover" alt="example" :src="image" />
    <template slot="actions" class="ant-card-actions">
      <a-icon key="edit" class="edit-action" type="edit" @click="editPage" />
      <a-icon
        key="delete"
        class="delete-action"
        type="delete"
        @click="deleteItem(id)"
      />
    </template>
    <a-card-meta :title="`${name} ($${price})`" :description="description">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deleteItem: {
      type: Function,
      required: true,
    },
  },
  methods: {
    editPage() {
      this.$router.push({
        path: '/edit-product',
        query: {
          id: this.id,
        },
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_vars';
.product {
  margin-bottom: 20px;
  .ant-card-actions {
    .edit-action {
      &:hover {
        color: $color-primary-dark !important;
      }
    }
    .delete-action {
      &:hover {
        color: rgba(red, 0.7) !important;
      }
    }
  }
}
</style>
