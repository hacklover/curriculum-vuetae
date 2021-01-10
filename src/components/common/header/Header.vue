<template>
  <header class="hero is-link">

    <div class="hero-body">
      <div class="container">

        <div class="logo" v-if="showLogo">
          <img src="assets/logo.png" alt="" />
        </div>

        <p class="title" v-text="$t('header.title')" />
        <p class="subtitle" v-text="$t('header.subtitle')" />

      </div>
    </div>

  </header>
</template>

<script>
  import curriculumConfig from '@/../cv.config'

  export default {
    name: "Header",
    computed: {
      showLogo() {
        return curriculumConfig.theme.showLogo
      }
    }
  }
</script>

<style scoped lang="less">
  header.hero {
    user-select: none;
    background-color: var(--app-header-background-color);
    background-image: var(--app-header-background-image);
    background-repeat: var(--app-header-background-repeat);
    background-size: var(--app-header-background-size);
    background-position: var(--app-header-background-position);
    background-attachment: var(--app-header-background-attachment);
    padding: 30px 0;

    .logo {
      display: inline-block;
      float: left;
      width: 64px;
      margin-right: 28px;

      img {
        border-radius: 50%;
      }
    }

    .title {
      color: var(--app-header-title);
    }

    .subtitle {
      color: var(--app-header-subtitle);
      font-size: 20px;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }
</style>