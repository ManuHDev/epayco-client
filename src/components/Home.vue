<template>
  <div class="hello">
    <h2>Principal</h2>
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
  </div>
</template>

<script>
import { getUser } from '../Services/AppStorage'
import { loggedIn } from '../Services/User'

export default {
  data() {
    return {
      name: null
    }
  },
  created() {
    if(!loggedIn()){
        window.location = './login'
      }
    this.name = getUser()
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
