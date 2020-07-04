<template>
  <div class="nav-languages">
    <ul v-if="locales.length > 1">
      <li v-for="(locale, i) of locales" :key="i" :class="{ active: locale === $i18n.locale }">
        <a v-text="locale.toUpperCase()" @click="$i18n.locale = locale" />
      </li>
    </ul>
  </div>
</template>

<script>
  import curriculumConfig from '../../../../cv.config'

  export default {
    name: "NavLanguages",
    data() {
      return {
        locales: curriculumConfig.locale.list
      }
    }
  }
</script>

<style lang="less">
  nav.navbar div.nav-languages {
    font-size: 14px;
    float: right;

    ul {
      li {
        display: inline-block;

        a {
          display: block;
          padding: 0 10px;
          color: var(--app-nav-language-color);
        }

        &:not(.active) {
          transition: opacity 0.2s ease-in-out;
          opacity: 0.25;

          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
  }
</style>