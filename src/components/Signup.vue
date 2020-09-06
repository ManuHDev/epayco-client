<template>
  <div class="hello">
    <h1>Registro</h1>
    <p>
      Signup
    </p>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="signup">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Documento</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.document" required placeholder="1234567">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.name" required placeholder="Pedro Perez">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.email" required placeholder="mymail@mail.com">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Celular</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.cellphone" required placeholder="4325555">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" v-model="form.password" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input class="btn btn-primary" type="submit" name="signup" value="registrar">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {loggedIn} from '../Services/User';

import axios from 'axios'

export default {
  data() {
        return {
            form: {
                document: null,
                name: null,
                email: null,
                cellphone: null,
                password: null
            }
        }
    },
    created() {
      if(loggedIn()){
        window.location = './'
      }
    },
    methods: {
        signup(){
            console.log(this.form)
            axios.post('http://127.0.0.1:3000/api/auth/signup', this.form)
              .then(res => { 
                    alert(res.data.message);},
                    window.location = './login' /*res => responseAfterLogin(res)*/) 
              .catch(error => console.log(error))
            
        }
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
