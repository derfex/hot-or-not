<template>
  <v-app-bar
    app
    dark
  >
    <div class="d-flex align-center">
      <v-icon large color="yellow darken-2">mdi-call-split</v-icon>
      <v-toolbar-title>HOT or NOT?</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/derfex/hot-or-not"
      target="_blank"
      text
    >
      <span class="mr-2">Source</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>
