<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
  >

    {{ $t( $store.state.snackbar.text ) }}
    <template v-slot:action="{ attrs }">
      <v-btn
        @click="$store.commit('hideSnackbar')"
        text
        v-bind="attrs"
      >
        <p class="mt-2">{{ $t("shared.snackbar.close") }}</p>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>

export default {

}
</script>