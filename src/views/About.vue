<template>
  <div class="about pa-6">
    <h1>Coindesk API</h1>
    <p>{{ $t("about.description.text") }}</p>
    <api />
  </div>
</template>

<script>

  export default {
    data: () => ({
      drawer: null,
      items: [
        { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' },
      ],
    }),
    components: {
      'api': require('@/components/Tools/API.vue').default
    }
  }
</script>