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
    background-color: #333;
    background-image: url('../../../assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-attachment: fixed;
    padding: 30px 0;

    .subtitle {
      opacity: 0.5;
      font-size: 20px;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }
</style>