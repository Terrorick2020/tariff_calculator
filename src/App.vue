<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@300;400;700&display=swap');

::selection {
  background: rgb(39, 137, 83);
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(180, 180, 180);
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
}
</style>