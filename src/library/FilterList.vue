<template>
  <div class="filter-list">
    <input :placeholder="emptyText" />
    <ul class="fl-list">
      <li class="fl-list-item" v-for="(item, i) in items" :key="key(item, i)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterList',
  props: ['items'],
  computed: {
    emptyText () {
      return this.placeholder || 'filter'
    }
  },
  methods: {
    key (item, index) {
      return item.id === undefined ? index : item.id
    }
  }
}
</script>
