<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div class="container">

      <!-- nav title -->
      <div class="navbar-brand navbar-align-left">
        <strong class="navbar-item" v-text="$t('common.curriculumVitae')" />
      </div>

      <!-- change locale -->
      <div class="navbar-end">
        <NavLanguages />
      </div>

    </div>

  </nav>
</template>

<script>
  import NavLanguages from "./NavLanguages";
  export default {
    name: "Nav",
    components: {NavLanguages}
  }
</script>

<style scoped lang="less">
  nav.navbar {
    background: var(--app-nav-background-color);
    padding-bottom: 1px;
    user-select: none;

    @media (max-width: 768px) {
      strong {
        margin: 0 auto;
      }
    }

    .navbar-brand {
      margin-left: 0;

      .navbar-item {
        padding-left: 0;
        color: var(--app-nav-text-color);
      }

      &.navbar-align-left {
        display: block;

        .navbar-item {
          line-height: 2.25rem;
        }
      }
    }

    .navbar-end {
      position: absolute;
      right: 0;
      top: 0;
      line-height: 52px;
    }
  }
</style>