<template>
  <div>

    <v-select
      v-model="$i18n.locale"
      :items="items"
      label="Language"
      solo
      >
  </v-select>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: ['en', 'fr']
    }),
  }
 
</script>

