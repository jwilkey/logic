<template>
  <div>
    <div class="flex-row m2-bottom">
      <input v-model="major" placeholder="major" />
      <input v-model="minor" placeholder="minor" />
      <input v-model="middle" placeholder="middle" />
      <button class="bg-secondary contrast p1 no-border" @click="clear"><i class="fas fa-times" /></button>
    </div>

    <transition name="fade">
      <div v-if="hasAnyTerm" class="bg-base p2">
        <div v-for="(form, i) in forms" :key="i + JSON.stringify(form.figure)">
          <h3 class="primary m1-bottom">Figure {{i + 1}}</h3>
          <div v-for="mood in form.moods" :key="mood" class="syllogism m1-bottom">
            <p class="tertiary font-4 line80">{{mood}}</p>
            <p>{{distribution(mood, 0)}} <span class="primary3">{{term(form.figure[0] === 0, major)}}</span> {{quality(mood, 0)}} <span class="primary3">{{term(form.figure[0] === 1, major)}}</span>.</p>
            <p>{{distribution(mood, 1)}} <span class="primary3">{{term(form.figure[1] === 0, minor)}}</span> {{quality(mood, 1)}} <span class="primary3">{{term(form.figure[1] === 1, minor)}}</span>.</p>
            <p>Therefore, {{distribution(mood, 2).toLowerCase()}} <span class="primary3">{{minor || blank}}</span> {{quality(mood, 2)}} <span class="primary3">{{major || blank}}</span>.</p>
          </div>
          <br>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Moods',
  data () {
    return {
      major: null,
      minor: null,
      middle: null,
      forms: [
        { figure: [0, 1], moods: ['AAA', 'EAE', 'AII', 'EIO'] },
        { figure: [1, 1], moods: ['EAE', 'AEE', 'EIO', 'AOO'] },
        { figure: [0, 0], moods: ['AAI', 'EAO', 'IAI', 'AII', 'OAO', 'EIO'] },
        { figure: [1, 0], moods: ['AAI', 'AEE', 'IAI', 'EAO', 'EIO', 'AEO'] }
      ]
    }
  },
  computed: {
    hasAnyTerm () {
      return this.major || this.minor || this.middle
    },
    blank () {
      return '___'
    }
  },
  methods: {
    distribution (mood, index) {
      return ['A', 'E'].includes(mood[index]) ? 'All' : 'Some'
    },
    quality (mood, index) {
      return ['E', 'O'].includes(mood[index]) ? 'are not' : 'are'
    },
    term (middleState, fallback) {
      return (middleState ? this.middle : fallback) || this.blank
    },
    clear () {
      this.major = null
      this.minor = null
      this.middle = null
    }
  }
}
</script>

<style lang="scss" scoped>
.syllogism {
  line-height: 140%;
}
</style>

