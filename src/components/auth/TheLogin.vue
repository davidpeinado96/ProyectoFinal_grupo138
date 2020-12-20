<template>
  <v-layout>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> Login </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="login.email"
                label="Email"
                required
              ></v-text-field>

              <v-text-field
                v-model="login.password"
                label="Contraseña"
                type="password"
                required
              ></v-text-field>

              <v-btn
                :disabled="!(this.login.password && this.login.email)"
                color="success"
                class="mr-4"
                block
                @click="loginUser"
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>


<script>
import swal from "sweetalert";
import VueJwtDecode from "vue-jwt-decode";
import axios from 'axios'
export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {

      axios.post('http://localhost:3000/api/usuario/login', this.login).then(response=>{
          return response.data;
      }).then(data =>{
          
          this.$store.dispatch('guardarToken', data.tokenReturn);
          this.$router.push({name:'Autenticado'});
          swal("Usuario autenticado", "Los datos son correctos", "success");
          console.log(data.tokenReturn);
          
          
      }).catch(error =>{
          swal("¡Atención!", "Error en la autenticación", "error");
          console.log(error);
          return error;
      })

    },
  },
};
</script>