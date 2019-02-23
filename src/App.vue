<template>
  <div id="app">
    <div class="header bg-base p1 p2-left p2-right shadow z1 uppercase">
      <h3 @click="$router.push('/')">Logic</h3>
    </div>

    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/app";

.header {
  letter-spacing: 2px;
}

</style>
