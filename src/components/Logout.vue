<template>
  <div class="hello">
    <h1>Salida</h1>
    <p>
      Logout
    </p>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.email" required placeholder="mymail@mail.com">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" v-model="form.password" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-6">
              <input type="submit" name="login" value="Entrar">
            </div>
            <div class="col-sm-6">
              <input type="button" name="signup" value="Registrarse">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {loggedIn, logout} from '../Services/User';

export default {
   data() {
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    created() {
      if(loggedIn()){
        logout()
        window.location = './login'
      }
      window.location = './login'
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
