<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid email!',
              },
              {
                required: true,
                message: 'Please input your email!',
              },
            ],
          },
        ]"
        class="form-input"
        placeholder="Email"
      >
        <a-icon slot="prefix" type="mail" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: 'Please input your Password!' }],
          },
        ]"
        class="form-input"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        :loading="isLoading"
        type="primary"
        html-type="submit"
        class="login-form-button"
        >Log in</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script>
import { login } from '@/core/Auth/auth.services'
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {
      name: 'normal_login',
    })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          this.isLoading = true
          try {
            await login(values)
            this.isLoading = false
            this.$router.push('/dashboard')
          } catch (err) {
            this.isLoading = false
            this.$notification.open({
              message: 'Something went wrong',
              description: err.toString(),
              icon: <a-icon type="close-circle" style="color: #f5222d" />,
            })
          }
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/_vars';
.login-form {
  max-width: 500px;
  background: #fff;
  padding: 15px;
  margin: 0 auto;
  border-radius: 3px;
}
.login-form-forgot {
  float: right;
}
.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
  border-color: $color-primary-dark;
  border-right-width: 1px !important;
}
.ant-input {
  height: 48px;
  color: rgba(0, 0, 0, 0.65);
  border: 2px solid rgba($grey-color, 0.5);
  &:hover {
    border-right-width: 2px !important;
    border-color: $color-primary-dark;
  }
  &:focus {
    border-color: $color-primary-dark;
    box-shadow: 0 0 0 0;
  }
}
.has-error .ant-form-explain,
.has-error .ant-form-split {
  color: $color-secondary-light;
}
.has-error .ant-input-affix-wrapper .ant-input {
  border-color: $color-secondary-light;
}
.login-form-button {
  height: 48px;
  width: 100%;
  background: $color-primary-dark;
  border-color: $color-primary-dark;
  &:hover,
  &:focus {
    border-color: $color-secondary-light;
    background: $color-secondary-light;
  }
}
</style>
