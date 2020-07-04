<template>
  <header class="hero is-link">

    <div class="hero-body">
      <div class="container">

        <p class="title" v-text="$t('header.title')" />
        <p class="subtitle" v-text="$t('header.subtitle')" />

      </div>
    </div>

  </header>
</template>

<script>
  export default {
    name: "Header"
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