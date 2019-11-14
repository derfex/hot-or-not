<template>
  <v-app>
    <AppBar/>

    <v-content>
      <HotOrNot/>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/HighLevel/AppBar.vue';
import HotOrNot from './components/HighLevel/HotOrNot.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    HotOrNot,
  },

  data: () => ({
    //
  }),
};
</script>
