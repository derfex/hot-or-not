<template>
  <div class="horn-root">
    <ul class="horn-list">
      <li class="horn-item">
        <BaseCard
          :data="currentCandidate"
        />
      </li>
      <li class="horn-item">
        <BaseCard
          :data="secondaryCandidate"
        />
      </li>
    </ul>
    <v-row>
      <v-col>
        <v-btn
          x-large
          block
          color="success"
        >
          Hot
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          x-large
          block
          color="error"
        >
          Not
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import request from '@/data/request';
import BaseCard from '@/components/Base/BaseCard.vue';

const countCandidates = 5;

export default {
  name: 'HotOrNot',
  components: { BaseCard },

  data() {
    return {
      candidates: [],
      processed: {
        hot: [],
        not: [],
      },
    };
  },

  computed: {
    currentCandidate() {
      return this.candidates[0] || {};
    },
    secondaryCandidate() {
      return this.candidates[1] || {};
    },
  },

  created() {
    this.candidates = request.loadCandidates(countCandidates);
  },

  methods: {
    rememberSelection(candidate, answer) {
      this.processed[answer].push(candidate);
    },
  },
};
</script>

<style lang="scss" scoped>
/* region variables and mixins */

$prefix: '.horn-';

@mixin list_decoration {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
}

/* endregion */


#{$prefix}root {
  display: table;
  margin: 0 auto;
  padding: 10px;
}

#{$prefix}list {
  position: relative;
  padding-left: 0;
  height: 350px;
  list-style: none;
  overflow: hidden;

  &:before {
    @include list_decoration;
    z-index: 1;
    background: rgba(255, 255, 255, .5);
  }

  &:after {
    @include list_decoration;
    background: linear-gradient(0, #fff, transparent);
  }
}

#{$prefix}item {
  margin-bottom: 10px;
}
</style>
