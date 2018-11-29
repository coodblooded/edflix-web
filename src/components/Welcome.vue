<template>
    <div class="modal-mask" id="thismodal">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
        <slot name="body">
<h3><strong> Organize Your Learning</strong></h3>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
                
              <button class="btn btn-success" @click="saveitem()" style="margin-right: 40%">
                Ok
              </button>
            </slot>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'newItem',
  delay: 2000,
  data () {
    return {
      showModal2: false,
      name: '',
      email: '',
      toEmail: 'edflix.project@gmail.com',
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
      this.showModal2 = false
      this.$emit('close')
      location.reload(true)
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
