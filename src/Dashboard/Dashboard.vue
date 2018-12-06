<template>
<div>
  <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
  <a><i class="glyphicon glyphicon-tags"></i> Tags</a>
  <ul v-if="datea">
      <li v-once>{{tags()}}</li>

       <li class="tags-list">
          <CollapsibleSection :tags="avaliablesTags">
          <ul>
          <li ><a @click="sortTag('All')">All</a></li>
          <li v-for="tag in t" v-bind:key="tag.id"><a @click="sortTag(tag)">{{tag}}</a></li>
          </ul>
          </CollapsibleSection>
        </li>
  </ul>
</div>
<div>
  <div class="row" style="margin-left:10px;">
  <div class="col-sm-6">
    <a id="show-modal" @click="showModal = true" class="btn btn-warning" style="margin-left:10px"><i class="glyphicon glyphicon-envelope"></i> Feedback</a>
  <FeedBack v-if="showModal" @close="showModal = false">
    <h3 slot="header">We would love to hear your feedback</h3>
  </FeedBack>
  </div>
  <div class="col-sm-4"></div>
  <div class="col-sm-4" style="float:right">
  </div>
  </div>
</div>
<div>
  <UserVideos :viedos="datea" :sortkey="defaultTagg">
  </UserVideos>
</div>
</div>

</template>

<script>
import CollapsibleSection from '../shared/collapsibleSection.vue'
import UserVideos from '../Videos/UserVideos.vue'
import FeedBack from '../FeedBack/Feedback.vue'
export default {
  name: 'dashboard',
  components: {CollapsibleSection, UserVideos, FeedBack},
  props: ['auth','authenticated'],
  data () {
    return {
      showModal: false,
      t: [],
      defaultTagg: 'All',
      avaliablesTags: ['Rating'],
      id_token: localStorage.getItem('access_token') === null ? null : localStorage.getItem('access_token')
    }
  },
  created () {
    const ass = this.id_token === null ? this.auth.userids : this.id_token
    this.auth.auth0.client.userInfo(ass, (err1, user) => {
      if (err1) {
        console.log(err1)
      } else {
        const payload = {
          sub_id:  user.sub,
          access_id: ass,
          nameuser: user.name,
          emailuser: user.email,
        }
        this.$store.dispatch('getUserId',payload).then((result) => console.log(result))
      }
    })
  },
  computed: {
    datea () {
      return this.$store.getters.doneTodos;
    },
  },
  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '250px'
      document.getElementById('main').style.marginLeft = '250px'
    },
    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
      document.getElementById('main').style.marginLeft = '0'
    },
    tags () {
      var a = this.$store.getters.doneTodos;
      const b = new Set()
      for( var i =0; i < a.items.length; i++){
        b.add(a.items[i].rating)
      }
      this.t = Array.from(b).sort()
    },
    sortTag(tagSelc) {
      this.defaultTagg =  tagSelc
    }
  }
  // watch: {
  //   '$route' (to, from) {
  //     this.id = to.params.id
  //     this.loadPosts()
  //   }
  // },
  // created () {
  //   this.loadPosts()
  // }

}
</script>

<style>

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
#main {
    transition: margin-left .5s;

}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

li{
  list-style-type: none
}

#labelde{
  font-size: 8px;
  color: white;
  margin-left: 5px;
}
.tags-list{
  font-size: 22px;
}
</style>
