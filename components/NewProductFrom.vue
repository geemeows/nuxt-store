<template>
  <div class="card">
    <a-row :gutter="32">
      <a-col :span="2">
        <div class="card-icon">
          <a-icon type="barcode" class="icon" />
        </div>
      </a-col>
      <a-col :span="22">
        <div class="card-title">
          <span>Add New Product</span>
        </div>
        <div class="card-body">
          <a-form :form="form" class="product-form" @submit="handleSubmit">
            <a-row :gutter="16">
              <a-col :xs="{ span: 24 }">
                <a-form-item>
                  <a-input
                    v-decorator="[
                      'name',
                      {
                        initialValue: name,
                        setFieldsValue: name,
                        getFieldDecorator: name,
                        rules: [
                          {
                            required: true,
                            message: 'Please add your product name!',
                          },
                        ],
                      },
                    ]"
                    placeholder="Product Name"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="{ span: 24 }">
                <a-form-item>
                  <a-input-number
                    v-decorator="[
                      'price',
                      {
                        initialValue: price,
                        setFieldsValue: price,
                        getFieldDecorator: price,
                        rules: [
                          {
                            required: true,
                            message: 'Please add your product price!',
                          },
                        ],
                      },
                    ]"
                    class="product-field-number"
                    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                    :min="0"
                    placeholder="Product Price"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="{ span: 24 }">
                <a-form-item>
                  <a-input
                    v-decorator="[
                      'image',
                      {
                        initialValue: image,
                        setFieldsValue: image,
                        getFieldDecorator: image,
                        rules: [
                          {
                            required: true,
                            message: 'Please add your product image link!',
                          },
                        ],
                      },
                    ]"
                    placeholder="Product Image Link"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="{ span: 24 }">
                <a-form-item>
                  <a-input
                    v-decorator="[
                      'description',
                      {
                        initialValue: description,
                        setFieldsValue: description,
                        getFieldDecorator: description,
                        rules: [
                          {
                            required: true,
                            message: 'Please add your product description!',
                          },
                        ],
                      },
                    ]"
                    placeholder="Product Description"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="{ span: 24 }">
                <a-form-item>
                  <a-button
                    :disabled="isLoading"
                    class="add-product"
                    type="primary"
                    html-type="submit"
                    :loading="isLoading"
                  >
                    Submit
                  </a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'new_product' }),
      name: null,
      image: null,
      description: null,
      price: 0,
      isLoading: false,
      editMode: false,
    }
  },
  watch: {
    product: {
      handler(newValue) {
        if (Object.keys(newValue).length > 0) {
          this.name = newValue.name
          this.image = newValue.image
          this.description = newValue.description
          this.price = newValue.price
          this.editMode = true
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.isLoading = true
          try {
            if (!this.editMode) {
              await this.$store.dispatch('ADD_PRODUCT', values)
              this.$notification.open({
                message: 'New Product',
                description: 'Your product added successfully!',
                icon: <a-icon type="check-circle" style="color: #52c41a" />,
              })
            } else {
              await this.$store.dispatch('EDIT_PRODUCT', {
                id: this.$route.query.id,
                product: values,
              })
              this.$notification.open({
                message: 'Edit Product',
                description: 'Your product changed successfully!',
                icon: <a-icon type="check-circle" style="color: #52c41a" />,
              })
            }
            this.isLoading = false
            this.$router.push('/dashboard')
          } catch (err) {
            this.isLoading = false
            this.$notification.open({
              message: 'Something went wrong',
              description: err.message,
              icon: <a-icon type="close-circle" style="color: #f5222d" />,
            })
          }
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss';
.card {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  background: #fff;
  color: #333;
  padding: 15px 20px 5px;
  position: relative;
  margin-bottom: 15px;
  @include respond-below(md) {
    margin-bottom: 35px;
  }
  .card-body {
    width: 100%;
    margin-top: 20px;
    .product-form {
      .add-product {
        width: 100%;
        height: 48px;
        background: $color-primary-dark;
        border-color: $color-primary-dark;
        color: #fff;
        &:hover {
          border-color: $color-secondary-light;
          background: $color-secondary-light;
        }
      }
      .ant-input {
        height: 48px;
        color: rgba(0, 0, 0, 0.65);
        border: 2px solid rgba($grey-color, 0.5);
        &:hover {
          border-right-width: 2px !important;
          border-color: $color-primary-dark;
        }
      }
      .product-field-number {
        height: 48px !important;
        width: 100%;
        border: 2px solid rgba($grey-color, 0.5);
        &:hover {
          border-right-width: 2px !important;
          border-color: $color-primary-dark;
        }
        .ant-input-number-handler-wrap {
          border: 2px solid $grey-color;
          border-left-width: 2px;
        }
        .ant-input-number-input-wrap {
          .ant-input-number-input {
            height: 45px !important;
            border: 2px solid $grey-color;
          }
        }
      }
    }
  }
  .card-title {
    font-size: 2em;
    font-weight: 700;
  }
  .card-stat {
    color: #3c4858;
    font-size: 2em;
  }
  .card-icon {
    background: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 1),
      rgba($color-primary-dark, 1)
    );
    width: 80px;
    height: 80px;
    margin-top: -45px;
    margin-bottom: 15px;
    border-radius: 50%;
    position: relative;
    .icon {
      font-size: 3em;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .card-footer {
    border-top: 1px rgba(153, 153, 153, 0.23) solid;
    padding: 5px;
    text-align: left;
    font-size: 12px;
    color: #999;
  }
}
</style>
