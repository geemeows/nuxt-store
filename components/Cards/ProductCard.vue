<template>
  <a-card class="product" hoverable>
    <img
      slot="cover"
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    />
    <template slot="actions" class="ant-card-actions">
      <a-icon key="edit" class="edit-action" type="edit" />
      <a-icon key="delete" class="delete-action" type="delete" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </a-card-meta>
  </a-card>
</template>

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
