<template>
  <div id="main">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" id="logo" v-if="!authenticated" >
          <img src="../src/assets/logosmall.png" alt="logo">
          </a>
          <span style="font-size:30px;cursor:pointer"  v-if="authenticated"  v-on:click="openNav" >&#9776;</span>
        </div>
      <form class="navbar-form navbar-left" action="/home/all"  v-if="authenticated" id="formcenter">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><button
                id="qsLoginBtn"
                class="btn btn-primary btn-margin"
                v-if="!authenticated"
                @click="login()">
                  Log In
              </button></li>
          <li><button
                id="qsLogoutBtn"
                class="btn btn-primary btn-margin"
                v-if="authenticated"
                @click="logout()">
                  Log Out
              </button>
          </li>
        </ul>
      </div>
    </nav>
      <router-view
        :auth="auth"
        :authenticated="authenticated">
      </router-view>
  </div>
</template>

<script>
import AuthService from './auth/AuthService.js'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier} = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout,
    openNav () {
      document.getElementById('mySidenav').style.width = '250px'
      document.getElementById('main').style.marginLeft = '250px'
    }
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
.btn-margin {
  margin-top: 7px
}

#logo{
  margin-bottom: 15px;
}

#main {
    transition: margin-left .1s;

}
#formcenter{
  margin-left:  40% ;
}

body{
  width: 100%
}

</style>
