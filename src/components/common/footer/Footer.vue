<template>
  <footer class="footer">
    <div class="content has-text-centered">
      Made with
      <a href="https://github.com/hacklover/curriculum-vuetae" target="_blank">Curriculum Vuetae</a>
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
    background-color: var(--app-footer-background-color);
    padding: 30px;
    user-select: none;

    div {
      color: var(--app-footer-text-color);

      a {
        color: var(--app-footer-link-color);
      }
    }
  }
</style>