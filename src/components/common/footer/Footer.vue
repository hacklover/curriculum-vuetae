<template>
  <footer class="footer">
    <div class="content has-text-centered">
      Made with
      <a href="https://github.com/hacklover/curriculum-vuetae" target="_blank">Curriculum Vuetae</a> &middot;
      <a href="https://github.com/hacklover/curriculum-vuetae" target="_blank">GitHub</a> &middot;
      <a href="https://patreon.com/hacklover" target="_blank">Donate</a>

      <br />

      Released under MIT License &middot;
      Copyright (c) 2020 <a href="https://hacklover.net" target="_blank">hacklover</a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="less">
  footer {
    background-color: #eaeaea;
    padding: 30px;
    user-select: none;

    div {
      color: #CCC;

      a {
        color: #BBB;
      }
    }
  }
</style>