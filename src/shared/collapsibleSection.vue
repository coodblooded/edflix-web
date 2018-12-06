<template>
 <div>
   <div class="header">
    <span v-if="!open" @click="open = !open"> <i class="glyphicon glyphicon-star"></i> {{tags[0]}} &#x25B2; </span>

     <span v-if="open" @click="open = !open"> <i class="glyphicon glyphicon-star"></i> {{tags[0]}} &#x25BC; </span>
   </div>
   <slot v-if="open"></slot>
</div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  props: {
    tags: {
      type: Array
    }
  },
  data () {
    return {open : false}
  }
}
</script>

<style>
.header{
  color: gray;
  padding: 3px;
  cursor: pointer;
}
</style>


