<template>
  <v-dialog
    :value="true"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
      <p>{{ $t("todo.dialogs.dialogDelete.deleteTask") }}</p>
      </v-card-title>
      <v-card-text><p>{{ $t("todo.dialogs.dialogDelete.areYouSure") }}</p></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('close')"
          text
        >
          <p>{{ $t("todo.dialogs.dialogDelete.no") }}</p>
        </v-btn>
        <v-btn
          @click="$store.dispatch('deleteTask', task.id)"
          color="red darken-1"
          text
        >
          <p>{{ $t("todo.dialogs.dialogDelete.yes") }}</p>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task']
}
</script>

<style>

</style>