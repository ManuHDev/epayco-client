<template>
  <div class="hello">
    <h2>Recargar saldo</h2>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-2">
          </div>
          <div class="col-sm-4 text-left">
            Usuario: {{name}}
          </div> 
          <div class="col-sm-4 text-right">
            <a href="logout" rel="noopener">Salir</a>
          </div>
        </div>
      </div>
    </div>
    <h3>Operaciones</h3>
    <ul>
      <li><a href="balance" rel="noopener">Consultar Saldo</a></li>
      <li><a href="recharge" rel="noopener">Recargar Saldo</a></li>
      <li><a href="payment" rel="noopener">Pago</a></li>
      <li><a href="confirmPayment" rel="noopener">Confirmar Pago</a></li>
    </ul>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="recharge">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Documento</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.document" required placeholder="1234567">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Celular</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.cellphone" required placeholder="4325555">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Monto</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="form.amount" required placeholder="100">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input class="btn btn-primary" type="submit" name="signup" value="Recargar">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, getToken } from '../Services/AppStorage'
import { loggedIn } from '../Services/User' 

import axios from 'axios'

export default {
  data() {
        return {
            form: {
                document: null,
                cellphone: null,
                amount: null
            }
        }
    },
    created() {
      if(!loggedIn()){
        window.location = './login'
      }
      this.name = getUser()  
    },
    methods: {
        recharge(){
            axios.post('http://127.0.0.1:3000/api/recharge', this.form, {
                headers: { Authorization: 'Bearer '+ getToken() }
            })
              .then(
                    alert('Su recarga fue exitosa')
                    ) 
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
