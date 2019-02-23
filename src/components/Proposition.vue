<template>
  <table>
    <tbody>
      <tr>
        <td></td>
        <td>
          <p class="secondary">{{ subjectDistribution }}</p>
        </td>
        <td></td>
        <td>
          <!-- <p class="secondary">{{ predicateDistribution }}</p> -->
        </td>
      </tr>
      <tr>
        <td>
          <select name="quantifiers" v-model="quantifier">
            <option>all</option>
            <option>some</option>
            <option>no</option>
          </select>
        </td>
        <td>
          <div>
            <input v-model="subject" placeholder="subject"/>
          </div>
        </td>
        <td>
          <select name="copula" v-model="copula">
            <option>is</option>
            <option>is not</option>
            <option>are</option>
            <option>are not</option>
          </select>
        </td>
        <td>
          <div>
            <input v-model="predicate" placeholder="predicate"/>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Proposition',
  data () {
    return {
      quantifier: 'all',
      subject: null,
      copula: 'are',
      predicate: null
    }
  },
  watch: {
    state () { }
  },
  computed: {
    state () {
      const s = {
        quantifier: this.quantifier,
        subject: this.subject,
        copula: this.copula,
        predicate: this.predicate
      }

      this.$emit('input', s)
      console.log('shoulda fired', this.quantifier)

      return s
    },
    subjectDistribution () {
      if (!this.quantifier) return undefined

      return ['all', 'no'].includes(this.quantifier) ? 'distributed' : 'undistributed'
    },
    predicateDistribution () {
      if (!this.copula) return undefined

      return 'distributed' || 'undistributed'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/app";

select {
  @extend .bg-base;
  @extend .contrast;
  @extend .border-secondary;
  @extend .m1-right;
  @extend .p1;
}
input {
  @extend .m1-right;
  @extend .p1;
  @extend .rounded;
  @extend .border-secondary;
}
</style>
