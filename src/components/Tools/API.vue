<template>
<div id="app">
  <p class="price">{{$n(577527, "currency")}}</p>
  <ul>
    <v-list-item 
      three-line
      v-for="post in info" 
      :key="post.symbol"
      >
      <v-list-item-content>
        <v-list-item-title>{{post.code}}</v-list-item-title>
        <v-list-item-subtitle>
          <p class="price">{{$n(post.rate,"currency")}}</p>
          <p class="price">{{$n(parseFloat(post.rate),"currency")}}</p>

          <p class="mb-0">Rate: {{post.rate}}</p>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          {{post.description}}
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