<template>
  <div id="contact">
    <br>

    <p>Got a question? Got something interesting to share? Just want to say hello?</p>

    <br>
    <br>

    <label for="name">Firstname *</label>
    <input id="name" v-model="firstname" type="text" name="name" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required.">
    <label for="email">Email *</label>
    <input id="email" v-model="email" type="email" name="email" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
    <label for="message">Message *</label>
    <textarea id="message" v-model="message" name="message" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave a message."></textarea>
    <button @click="sendMessage" class="btn btn-success btn-send">Send message</button>
    <br>

    <div id="form-response" v-html="success"></div>                     
    <div id="form-response" v-html="error"></div>

  </div>
</template>




<script>
import ContactService from '@/services/ContactService'

export default {
  name: 'contact',
  data () {
      return {
        firstname: '',
        email: '',
        message: '',
        success: null,
        error: null
      }
    },
  methods: {
    async sendMessage() {
        try {
                console.log('Send Message button was clicked', this.firstname, this.email, this.message)  
                const response = await ContactService.contact({
                name: this.firstname,
                email: this.email,
                message: this.message
        })  
        //console.log(response.data)
        console.log("response = ", response.data.response)
        this.success = response.data.response
        } catch (error) {
            this.error = error.response.data.error
        }
    }  
  
  }  
  //watch: {
      //firstname(value) {
        //console.log('name has changed', value);
      //}
  //}
  }
</script>
<!-- styling for the component -->
<style scoped>
p {
    font-size: 22px;
    font-family: Pacifico;
    color: rgb(232, 90, 13);
  }


</style>