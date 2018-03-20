<template>
  <div id="contact">
        <div class="container">

            <div class="row">

                <div class="col-lg-8 col-lg-offset-2">

                    <!-- <h4>Wanna Contact Me? Fill out the form below..</h4> -->
                    <br>

                    <p>Got a question? Got something interesting to share? Just want to say hello?</p>

                    <br>
                    <br>
                    <br>


                    <!-- We're going to place the form here in the next step -->
                    <form id="contact-form">

                        <div class="messages"></div>

                        <div class="controls">

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="name">Firstname *</label>
                                        <input id="name" v-model="firstname" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required.">
                                        <div class="help-block with-errors"></div>
                                        <p>You typed {{ firstname }}</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="lastname">Lastname</label>
                                        <input id="lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" data-error="Lastname is required.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="email">Email *</label>
                                        <input id="email" v-model="email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input id="phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="message">Message *</label>
                                        <textarea id="message" v-model="message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <button @click="sendMessage" class="btn btn-success btn-send">Send message</button>
                                </div>
                            </div>
                            
                        </div>

                    </form>

                    <div id="form-response">
                        <p>{{resp}}</p>
                    </div>                     

                </div>

            </div>

        </div>
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
        resp: ''
      }
    },
  methods: {
    async sendMessage() {
      console.log('Send Message button was clicked', this.firstname, this.email, this.message)  
      const response = await ContactService.contact({
          name: this.firstname,
          email: this.email,
          message: this.message
      })  
      console.log(response.data)
      const respJson = JSON.parse(JSON.stringify(response))
      resp = respJson.response
      console.log("response message", resp)
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