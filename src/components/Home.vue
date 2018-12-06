<template>
  <div id="main">
    <div v-if="authenticated">
      <router-view/>
    </div>
      <section id="fristsec" v-if="!authenticated">
       <div class="container">
         <center>
           <div style="margin-top:100px;">
               <h1><strong>EdFlix - Organize Your Learning</strong> </h1>
             </div>
            <div style="margin-top:100px;">
               <button class="btn btn-primary" @click="auth.login()" style="width:150px;">Get Started</button>
             </div>
            <p style="margin-top:20px;">Already have an account? <span> <a @click="auth.login()" style="color:blue">Log In</a></span></p>
         </center>
       </div>
      </section>
  </div>
</template>

<script>
  // import appService from '../appservice.js'

  export default {
    name: 'home',
    props: ['auth', 'authenticated']
  }
</script>

<style>
  a {
    cursor: pointer;
  }
  /* #main {
    transition: margin-left .5s;

} */
#mainid{
  margin-top: 70px;
}

#fristsec{
  height: 500px;
  width: 100%;
  background-image: url('../assets/back.jpg');
  margin-top: -20px;
}

</style>

