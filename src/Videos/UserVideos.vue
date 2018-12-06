<template>
<div>
  <div v-if="viedos === null">
    <Callable/>
  </div>
 <div v-show="sortkey !== 'All'">
    <div class="grid-container" style="margin-top:20px;margin-left:20px;" v-if="viedos">
      <div id="demo" v-for="item in viedos.items.filter( item => item.rating === +sortkey)" v-bind:key="item.id">
        <div class="panel panel-default">
          <div class="panel-heading">
            <center>
              <div  id="wordlnt">
              <a  data-toggle="tooltip" v-bind:title="item.title" target="_blank" v-bind:href="item.url"><strong> {{item.title}}</strong> </a>

              </div>
            </center>

          </div>
          <div class="panel-body">
            <div class="video">
                    <iframe v-bind:src="ModifyLink(item.url)" frameborder="0"></iframe>
                  </div>
          </div>
          <div class="panel-body">
            <p id="datesize" ><small>{{item.comment}}</small></p>
            <div class="row">
              <div class="col-sm-3" id="labelde" style="background-color: #2FA2F3;border-radius: 3px;">Grade None</div>
              <div class="col-sm-3" id="labelde" style="background-color: #DBAC5C;border-radius: 3px;">No subject</div>
              <div class="col-sm-2" id="labelde" style="background-color: #349E34;border-radius: 3px;">{{item.rating}}<i class="glyphicon glyphicon-star"></i></div>
              <div class="col-sm-3" id="labelde" style="background-color: #CD5B5B;border-radius: 3px;">Uncategorized</div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  <div v-show="sortkey === 'All'">
    <div class="grid-container" style="margin-top:20px;margin-left:20px;" v-if="viedos">
      <div id="demo" v-for="item in viedos.items" v-bind:key="item.id">
        <div class="panel panel-default">
          <div class="panel-heading">
            <center>
              <div  id="wordlnt">
              <a  data-toggle="tooltip" v-bind:title="item.title" target="_blank" v-bind:href="item.url"><strong> {{item.title}}</strong> </a>

              </div>
            </center>

          </div>
          <div class="panel-body">
            <div class="video">
                    <iframe v-bind:src="ModifyLink(item.url)" frameborder="0"></iframe>
                  </div>
          </div>
          <div class="panel-body">
            <p id="datesize" ><small>{{item.comment}}</small></p>
            <div class="row">
              <div class="col-sm-3" id="labelde" style="background-color: #2FA2F3;border-radius: 3px;">Grade None</div>
              <div class="col-sm-3" id="labelde" style="background-color: #DBAC5C;border-radius: 3px;">No subject</div>
              <div class="col-sm-2" id="labelde" style="background-color: #349E34;border-radius: 3px;">{{item.rating}}<i class="glyphicon glyphicon-star"></i></div>
              <div class="col-sm-3" id="labelde" style="background-color: #CD5B5B;border-radius: 3px;">Uncategorized</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>

<script>
import Callable from '../components/Callback1.vue'
export default {
  name: 'Videos',
  props: ['viedos','sortkey'],
  components: {Callable},
  data () {
    return {
    d: []
    }
  },


  methods : {
    ModifyLink(url) {
      var urlclone = url
      if (urlclone.includes('watch?v=')) {
        urlclone = urlclone.replace('watch?v=', 'embed/')
      }
      return urlclone
    }
  },
}
</script>


<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  background-color: rgb(255, 255, 255);
  padding: 10px;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgb(201, 190, 190);
  text-align: center;
  font-size: 30px;
}
#demo {
-webkit-transition: 0.5s;
transition: 0.5s;
-webkit-box-shadow: 1px 2px 9px 5px rgba(0,0,0,0.63);
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
}

#demo:hover{
-webkit-box-shadow: 1px 2px 9px 5px rgba(0,0,0,0.63);
box-shadow: 1px 1px 10px 5px rgba(135, 233, 236, 0.63);
 -moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
-o-transform: scale(1.1);
-ms-transform: scale(1.1);
transform: scale(1.1);
}
.video {
  border-radius: 5px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
}

#wordlnt {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 40ch;
    font-size: 12px;
    color: #5A89E7;
}
#datesize{
  font-size: 16px;
  text-decoration:tomato
}

#infobtn{
  margin-bottom: 10px;
  margin-left: 70%
}
</style>
