    <v-select
      v-model="$i18n.locale"
      :items="items"
      solo
      >
    </v-select>

    export default {
    data: () => ({
      items: ['en', 'fr'],
    })
  }

<template>
  <div style="width: 80px">
    <v-select
      background-color='transparent'
      flat
      append-icon="mdi-translate"
      v-model="$i18n.locale"
      :items="items"
      label=""
      solo
      >asdf
        
    </v-select>
  </div>
</template>

<script>
    export default {
    data: () => ({
      items: ['en', 'fr'],
    })
  }

</script>
