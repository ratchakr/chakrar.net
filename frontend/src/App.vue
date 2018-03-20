<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <!-- <ul class="nav nav-pills">
          <li><router-link v-bind:to="'/'">Home</router-link></li>
          <li class="pull-right"><router-link v-bind:to="'/about'">About Me</router-link></li>
          <li class="pull-right"><router-link v-bind:to="'/contact'">Contact</router-link></li>
        </ul> -->
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><router-link v-bind:to="'/'">Home</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-center">
            <li><router-link v-bind:to="'/about'">Work</router-link></li>
            <li><router-link v-bind:to="'/contact'">Articles</router-link></li>
            <li><router-link v-bind:to="'/contact'">Newsletter</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
              <li><router-link v-bind:to="'/about'">About Me</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
              <li><router-link v-bind:to="'/contact'">Contact</router-link></li>
          </ul>
        </div>
      </div>  
    </nav>
    <!-- <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <router-link v-bind:to="'/contact'">Contact Me</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.nav-pills{
  font-size:1.7em;
  background-color:black;
  margin-bottom:5%;
  margin-top: 0;
}

.navbar-nav.navbar-center {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
  }
</style>
