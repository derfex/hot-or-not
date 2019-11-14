<template>
  <v-card
    outlined
    width="400px"
  >
    <div class="base-card__image-box">
      <v-img
        :src="data.path"
        class="ma-auto"
        width="200px"
        height="200px"
      />
    </div>
    <v-card-title>{{ data.title }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-card__image-box {
  background-color: #222;
}
</style>
