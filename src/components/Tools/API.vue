<template>
<div id="app">
  <ul>
    <v-list-item 
      three-line
      v-for="post, index in info" 
      :key="post.symbol"
      >
      <v-list-item-content>
        <v-list-item-title>{{post.code}}</v-list-item-title>
        <v-list-item-subtitle>
          <p class="price mb-0">{{$n(parseFloat(post.rate_float),index)}}</p>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      info: null,
    }
  },
  mounted () {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response.data.bpi))
    .then(response => (console.log(this.info)))
  }
}
</script>