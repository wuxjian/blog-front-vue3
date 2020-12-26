<template>
  <div class="container min-vh-100 d-flex justify-content-center align-items-center">
    <div class="row justify-content-center align-items-center">
      <div class="card-wrapper">
        <div class="card fat">
          <div class="card-body">
            <h4 class="card-title">登录</h4>
            <form :class="{'was-validated': wasValidated}" method="POST" class="my-login-validation" novalidate="">
              <div class="form-group">
                <input @blur="handleBlur" v-model="loginParam.username" type="text" class="form-control" placeholder="用户名" required autofocus>
                <div class="invalid-feedback">
                  请输入用户名
                </div>
              </div>

              <div class="form-group mt-4">
                <input @blur="handleBlur" v-model="loginParam.password" type="password" class="form-control" placeholder="密码" required data-eye>
                <div class="invalid-feedback">
                  请输入用密码
                </div>
              </div>

              <div class="form-group mt-4">
                <button @click.prevent="handleSubmit" type="submit" class="btn btn-primary w-100">
                  登录
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';
import {useRouter} from 'vue-router'
import {login} from '@/api/user'
import alertify from '@/utils/alert'
import {setToken} from '@/utils/auth'

export default defineComponent({
  name: 'Login',
  setup() {

    const router = useRouter()

    const loginParam = reactive({
      username: '',
      password: ''
    })
    const wasValidated = ref(false)

    const handleBlur = () => {
      wasValidated.value = true
    }

    const handleSubmit = () => {
      if (loginParam.username.trim() === '' || loginParam.password.trim() === '') {
        return
      }
      login(loginParam).then(res => {
        setToken(res.data)
        router.push('/admin')
      }).catch(e => {
        alertify.error(e.message)
      })
    }
    return {
      loginParam,
      wasValidated,
      handleBlur,
      handleSubmit
    }
  }
});
</script>

<style scoped lang="scss">
.brand {
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 50%;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .05);
  position: relative;
  z-index: 1;
}

.brand img {
  width: 100%;
}

.card-wrapper {
  width: 400px;
}

.card {
  border-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .05);
}

.card.fat {
  padding: 10px;
}

.card .card-title {
  margin-bottom: 30px;
}

.form-control {
  border-width: 2.3px;
}

.form-group label {
  width: 100%;
}

.btn.btn-block {
  padding: 12px 10px;
}

.footer {
  margin: 40px 0;
  color: #888;
  text-align: center;
}

@media screen and (max-width: 425px) {
  .card-wrapper {
    width: 100%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 320px) {
  .card.fat {
    padding: 0;
  }

  .card.fat .card-body {
    padding: 15px;
  }
}
</style>
