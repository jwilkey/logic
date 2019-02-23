<template>
  <div class="home">
    <div class="p2">
      <div class="bg-base p2 rounded shadow">
        <h1>Categorical Syllogisms</h1>
        <router-link to="/forms">Forms</router-link>

        <div class="p3">
          <h3>Proposition 1</h3>
          <proposition v-model="majorPremise"></proposition>
          <br>
          <h3>Proposition 2</h3>
          <proposition v-model="minorPremise"></proposition>
          <br>
          <h3>Conclusion</h3>
          <proposition v-model="conclusion"></proposition>
        </div>

        <div v-if="isComplete" class="p3">
          <p v-for="result in validateResult" :key="result.id" class="error">{{ result.label }}</p>
          <p v-if="validateResult === true">Syllogism is valid.</p>
        </div>

        <hr>

        <div class="p3">
          <glossary></glossary>
        </div>

        <div class="p2">
          <p>Type A: Universal Affirmative</p>
          <p>Type E: Universal Negative</p>
          <p>Type I: Particular Affirmative</p>
          <p>Type O: Particular Negative</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Proposition from '@/components/Proposition'
import Glossary from '@/views/Glossary'
import logic from '@/js/logic'

export default {
  name: 'home',
  data () {
    return {
      majorPremise: {},
      minorPremise: null,
      conclusion: null
    }
  },
  components: { Proposition, Glossary },
  computed: {
    isComplete () {
      return logic.isComplete(this.majorPremise, this.minorPremise, this.conclusion)
    },
    validateResult () {
      return logic.validate(this.majorPremise, this.minorPremise, this.conclusion)
    }
  }
}
</script>
