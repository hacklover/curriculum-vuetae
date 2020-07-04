<template>
  <div id="app">

    <Nav />
    <Header />

    <main>
      <div class="container">

        <div class="columns">

          <section class="column is-two-fifths is-half-tablet">
            <CurriculumDetails />
          </section>

          <section class="column column-experiences column-side">
            <CurriculumTimeline />
          </section>

        </div>

      </div>
    </main>

    <Footer v-if="showCopyright" />

  </div>
</template>

<script>
import curriculumConfig from '../cv.config'

import Nav from './components/common/nav/Nav.vue'
import Header from './components/common/header/Header.vue'
import CurriculumDetails from "./components/curriculum/CurriculumDetails";
import CurriculumTimeline from './components/curriculum/CurriculumTimeline.vue'
import Footer from "./components/common/footer/Footer";

export default {
  name: 'app',
  components: {
    Nav,
    Header,
    Footer,
    CurriculumDetails,
    CurriculumTimeline
  },
  computed: {
    showCopyright() {
      return curriculumConfig.showCopyright
    }
  },
  methods: {
    /**
     * Append to <head> some custom color CSS
     */
    appendCustomStyles() {
      const css = `:root {\n` +
        `  --link-color: ${curriculumConfig.theme.link};\n` +
        `  --experience-title-color: ${curriculumConfig.theme.experience.title};\n` +
        `  --experience-tag-primary-color: ${curriculumConfig.theme.experience.tag.primary};\n` +
        `  --experience-tag-secondary-color: ${curriculumConfig.theme.experience.tag.secondary};\n` +
        `  --project-title-color: ${curriculumConfig.theme.experience.project.title};\n` +
        `  --project-tag-primary-color: ${curriculumConfig.theme.experience.project.tag.primary};\n` +
        `  --project-tag-secondary-color: ${curriculumConfig.theme.experience.project.tag.secondary};\n` +
        `}`;

      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');

      head.appendChild(style);

      style.type = 'text/css';
      if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }
  },
  mounted() {
    this.appendCustomStyles()
  }
}
</script>

<style lang="less">
  html {
    background-color: #EEE !important;
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    @media screen and (max-width: 1472px) {
      .container {
        max-width: 100%;
        width: 100%;
      }

      nav, main {
        padding: 0 25px;
      }
    }

    main {
      padding: 30px 0;

      .column-side {
        padding-left: 0;
      }

      @media (max-width: 1088px) {
        .column-side {
          padding-left: 1.5rem;
        }
      }

      @media (max-width: 1020px) {
        margin-bottom: 0;

        .column-side {
          padding: 22px 22px 22px 22px;
        }
      }
    }

    @media screen and (max-width: 1020px) {
      .columns {
        display: block !important;

        .column {
          width: 100%;
        }
      }
    }

    .tag {
      user-select: none;
    }
  }
</style>
