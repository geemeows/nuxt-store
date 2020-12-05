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
                            message: 'Please add your product name!',
                          },
                        ],
                      },
                    ]"
                    class="product-field-number"
                    :formatter="
                      (value) =>
                        `E£ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    "
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
                    class="add-product"
                    type="primary"
                    html-type="submit"
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
  data() {
    return {
      form: this.$form.createForm(this, { name: 'new_product' }),
      name: null,
      image: null,
      description: null,
      price: 0,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
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
        height: 48px;
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
            height: 50px;
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
