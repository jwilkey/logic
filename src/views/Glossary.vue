<template>
  <div>
    <filter-list :items="terms"></filter-list>
  </div>
</template>

<script>
import FilterList from '@/library/FilterList'

export default {
  name: 'Glossary',
  data () {
    return {
      terms: [
        { id: 0, label: 'equivocation: when a term has one meaning the first time it is used, and another the second time it is used.' },
        { id: 1, label: 'Distributed:' },
        { id: 2, label: 'Fallacy of Undistributed Middle: when no use of the middle term is distributed (both uses are undistributed' }
      ]
    }
  },
  components: { FilterList }
}
</script>
