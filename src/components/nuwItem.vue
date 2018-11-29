<template>
    <div class='modal-mask' id='thismodal'>
      <div class='modal-wrapper'>
        <div class='modal-container'>

          <div class='modal-header'>
            <slot name='header'>
              default header
            </slot>
          </div>

          <div class='modal-body'>
        <slot name='body'>


                <div class='form-group'>
                  <label class='sr-only' for='exampleInputAmount'></label>
                  <div class='input-group'>
                    <div class='input-group-addon'><i class='glyphicon glyphicon-user'></i></div>
                    <input type='text' class='form-control' id='exampleInputAmount' placeholder='Your Name' v-model='name'>
                    <div class='input-group-addon'></div>
                  </div>
                </div>
                <div class='form-group'>
                  <label class='sr-only' for='exampleInputAmount'></label>
                  <div class='input-group'>
                    <div class='input-group-addon'><i class='	glyphicon glyphicon-envelope'></i></div>
                    <input type='text' class='form-control' id='exampleInputAmount' placeholder='Your Email' v-model='email'>
                    <div class='input-group-addon'></div>
                  </div>
                </div>
                <!-- <div class='form-group'>
                  <label class='sr-only' for='exampleInputAmount'></label>
                  <div class='input-group'>
                    <div class='input-group-addon'><i class='	glyphicon glyphicon-envelope'></i></div>
                    <input type='hidden' class='form-control' id='exampleInputAmount' placeholder='Rating' v-model='toEmail' readonly>
                    <div class='input-group-addon'></div>
                  </div>
                </div> -->
                <div>
                 <input type='hidden' class='form-control' id='exampleInputAmount' placeholder='Rating' v-model='toEmail' readonly>

                </div>
                <div class='form-group'>
                  <label class='sr-only' for='exampleInputAmount'></label>
                  <div class='input-group'>
                    <div class='input-group-addon'><i class='glyphicon glyphicon-comment	'></i></div>
                    <textarea type='text' class='form-control' id='exampleInputAmount' placeholder='Your Message' v-model='message'></textarea>
                    <div class='input-group-addon'></div>
                  </div>
                </div>
            </slot>
          </div>

          <div class='modal-footer'>
            <slot name='footer'>
              <button class='btn btn-success' @click='saveitem()'>
                Send
              </button>
                <button class="btn btn-danger" @click="$emit('close')" >
                Cancle
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import appService from '../appservice.js'
export default {
  name: 'newItem',
  data () {
    return {
      showModal1: false,
      name: '',
      email: '',
      toEmail: 'patelsandeep126@gmail.com',
      message: ''
    }
  },
  methods: {
    close1: function () {
      this.$emit('close')
      this.title = ''
      this.body = ''
    },
    saveitem () {
      // const sgMail = require('@sendgrid/client')
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
      // console.log(sgMail)
      // console.log(process.env)
      // const msg = {
      //   to: 'patelsandeep126@gmail.com',
      //   from: 'patelsandeep126@gmail.com',
      //   subject: 'Sending with SendGrid is Fun',
      //   text: 'and easy to do anywhere, even with Node.js',
      //   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
      // }
      // sgMail.send(msg)
      // var data = {
      //   personalizations: [
      //     {
      //       to: [
      //         {
      //           email: 'patelsandeep126@gmail.com',
      //           name: 'Sandeep Patel'
      //         }
      //       ],
      //       subject: 'Hello, World!'
      //     }
      //   ],
      //   from: {
      //     email: 'sandeep@robodia.com',
      //     name: 'ss Patel'
      //   },
      //   content: [
      //     {
      //       type: 'text/plain',
      //       value: 'Hello, World!'
      //     }
      //   ]
      // }
      // const request = {
      //   method: 'POST',
      //   url: '/v3/mail/send',
      //   headers: {
      //     'content-type': 'application/json',
      //     'Access-Control-Allow-Origin': 'https://sendgrid.com'
      //   },
      //   body: data,
      //   json: true
      // }
      // sgMail.request(request)
      //   .then(([response, body]) => {
      //     console.log(response.statusCode)
      //     console.log(body)
      //   })
      // let userid = window.localStorage.getItem('edflix_user_id')
      // var xhr = new XMLHttpRequest()
      // xhr.withCredentials = true
      // xhr.addEventListener('readystatechange', function () {
      //   if (this.readyState === this.DONE) {
      //     console.log(this.responseText)
      //   }
      // })
      // xhr.open('POST', 'https://api.sendgrid.com/v3/mail/send')
      // xhr.setRequestHeader('authorization', 'Bearer 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')
      // xhr.setRequestHeader('content-type', 'application/json')
      // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://sendgrid.com')
      // xhr.setRequestHeader('x-no-cors-reason', 'https://sendgrid.api-docs.io')
      // xhr.send(JSON.stringify(data))
      // this.close1()
    }

  }
}
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
