<template>
  <div id="home" class="text-center">
      This is the home page!
    <div class="block text-center">
      <h1>Ratnopam Chakrabarti</h1>
      <h3>A Father | An Architect | A Self Learner</h3>
    </div>  
    <div class="text-center">
      <a class="btn btn-default" href="https://twitter.com/ratnopam"><i class="fa fa-twitter fa-sm" id="twitterIcon" aria-hidden="true"></i> Twitter</a>
      <a class="btn btn-default" href="https://github.com/ratchakr"><i class="fa fa-github fa-sm" id="githubIcon" aria-hidden="true"></i> Github</a>
      <a class="btn btn-default" href="https://www.linkedin.com/in/ratnopam-chakrabarti/"><i class="fa fa-linkedin fa-sm" id="linkedinIcon" aria-hidden="true"></i> LinkedIn</a>
      <a class="btn btn-default" id="mediumIcon" href="https://medium.com/@chakrar27"><i class="fa fa-medium fa-sm" aria-hidden="true"></i> Medium</a>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<!-- styling for the component -->
<style scoped>
#home {
  
}

#twitterIcon{
  color:rgb(0, 172, 237);
}
#githubIcon{
  color:rgb(102, 43, 129);
}
#linkedinIcon{
  color:rgb(0, 127, 178);
}
#mediumIcon{
  color:rgb(0, 172, 237);
}

.block{
  background-color:black;
  opacity:.7;
  padding:20px;
  width:50%;
  margin-right:auto;
  margin-left:auto;
  border-radius:10px;
}


h1{
  padding:0;
  margin-top:0px;
  font-size:3.5em;
  font-weight:bold;
  color:white;
}
h3{
  color:yellow;
}

.btn-default{
  background-color:black;
  border-color:black;
  color:#337ab7;
  font-size:1.4em;
  margin-top:1%;
}
body{
  background-color:white;
  font-family:Source Sans Pro;
  color:white;
}
</style>