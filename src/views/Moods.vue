<template>
  <div>
    <div class="flex-row m2-bottom">
      <input v-model="major" placeholder="major" />
      <input v-model="minor" placeholder="minor" />
      <input v-model="middle" placeholder="middle" />
    </div>

    <div class="white-bg">
      <div v-for="(form, i) in forms" :key="i + JSON.stringify(form.figure)">
        <h3 class="m1-bottom">Figure {{i + 1}}</h3>
        <div v-for="mood in form.moods" :key="mood">
          <p><span class="primary">{{mood}}</span>
          {{distribution(mood, 0)}} {{term(form.figure[0] === 0, major)}} {{quality(mood, 0)}} {{term(form.figure[0] === 1, major)}}.
          {{distribution(mood, 1)}} {{term(form.figure[1] === 0, minor)}} {{quality(mood, 1)}} {{term(form.figure[1] === 1, minor)}}.
          {{distribution(mood, 2)}} {{minor}} {{quality(mood, 2)}} {{major}}.
          </p>
        </div>
        <br>
      </div>
    </div>
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
  methods: {
    distribution (mood, index) {
      return ['A', 'E'].includes(mood[index]) ? 'All' : 'Some'
    },
    quality (mood, index) {
      return ['E', 'O'].includes(mood[index]) ? 'are not' : 'are'
    },
    term (middleState, fallback) {
      return middleState ? this.middle : fallback
    }
  }
}
</script>

