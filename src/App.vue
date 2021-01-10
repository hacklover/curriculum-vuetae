<template>
  <div id="app">

    <Nav v-if="showNav" />
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
  import curriculumConfig from '@/../cv.config'

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
      showNav() {
        return curriculumConfig.theme.showNav
      },
      showCopyright() {
        return curriculumConfig.showCopyright
      }
    },
    methods: {
      /**
       * Load defined theme in "cv.config.js"
       */
      async loadActiveTheme() {
        const themeName = curriculumConfig.theme.name;

        return import(`./themes/${themeName}/theme`)
          .then(theme => theme.default)
          .catch(() => {
            console.error(`Unable to load "${themeName}" theme in "src/themes" folder`)
            return false
          })
      },
      /**
       * Append to <head> some custom color CSS
       */
      appendCustomStyles(theme) {
        const css = `:root {\n` +
          `  --app-background-color: ${theme.app.common.background};\n` +
          `  --app-text-color: ${theme.app.common.text};\n` +
          `  --app-link-color: ${theme.app.common.link};\n` +
          `  --app-heading-color: ${theme.app.common.heading};\n` +
          `  --app-separator-color: ${theme.app.common.separator};\n` +
          `  --app-table-color: ${theme.app.common.table};\n` +

          `  --app-nav-background-color: ${theme.app.nav.background};\n` +
          `  --app-nav-text-color: ${theme.app.nav.text};\n` +
          `  --app-nav-text-color: ${theme.app.nav.text};\n` +
          `  --app-nav-language-color: ${theme.app.nav.language};\n` +

          `  --app-header-title: ${theme.app.header.title};\n` +
          `  --app-header-subtitle: ${theme.app.header.subtitle};\n` +
          `  --app-header-logo: ${theme.app.header.logo};\n` +
          `  --app-header-background-color: ${theme.app.header.backgroundColor};\n` +
          `  --app-header-background-image: ${theme.app.header.backgroundImage};\n` +
          `  --app-header-background-repeat: ${theme.app.header.backgroundRepeat};\n` +
          `  --app-header-background-size: ${theme.app.header.backgroundSize};\n` +
          `  --app-header-background-position: ${theme.app.header.backgroundPosition};\n` +
          `  --app-header-background-attachment: ${theme.app.header.backgroundAttachment};\n` +

          `  --app-footer-background-color: ${theme.app.footer.background};\n` +
          `  --app-footer-text-color: ${theme.app.footer.text};\n` +
          `  --app-footer-link-color: ${theme.app.footer.link};\n` +

          `  --details-title-color: ${theme.details.title};\n` +
          `  --details-subtitle-color: ${theme.details.subtitle};\n` +
          `  --details-text-color: ${theme.details.text};\n` +

          `  --experience-title-color: ${theme.experience.title};\n` +
          `  --experience-subtitle-color: ${theme.experience.subtitle};\n` +
          `  --experience-text-color: ${theme.experience.text};\n` +
          `  --experience-tag-primary-background-color: ${theme.experience.tag.primary.background};\n` +
          `  --experience-tag-primary-text-color: ${theme.experience.tag.primary.text};\n` +
          `  --experience-tag-secondary-background-color: ${theme.experience.tag.secondary.background};\n` +
          `  --experience-tag-secondary-text-color: ${theme.experience.tag.secondary.text};\n` +

          `  --project-title-color: ${theme.experience.project.title};\n` +
          `  --project-text-color: ${theme.experience.project.text};\n` +
          `  --project-tag-primary-background-color: ${theme.experience.project.tag.primary.background};\n` +
          `  --project-tag-primary-text-color: ${theme.experience.project.tag.primary.text};\n` +
          `  --project-tag-secondary-background-color: ${theme.experience.project.tag.secondary.background};\n` +
          `  --project-tag-secondary-text-color: ${theme.experience.project.tag.secondary.text};\n` +
          `}`;

        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
          // This is required for IE8 and below.
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
      }
    },
    async mounted() {
      const theme = await this.loadActiveTheme()

      if (theme) {
        this.appendCustomStyles(theme)
      }
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
    background: var(--app-background-color);
    color: var(--app-text-color);

    @media screen and (max-width: 1472px) {
      .container {
        max-width: 100%;
        width: 100%;
      }

      nav, main {
        padding-left: 25px;
        padding-right: 25px;
      }
    }

    main {
      padding-top: 35px;
      padding-bottom: 35px;

      .column-side {
        padding-left: 0;
      }

      @media (max-width: 1088px) {
        .column-side {
          padding-left: 1.5rem;

          .timeline {
            .timeline-item {
              margin-left: 0;
            }
          }
        }
      }

      @media (max-width: 845px) {
        margin-bottom: 0;

        .column-side {
          padding: 0 13px 13px 13px;
          margin-top: -13px;
        }
      }
    }

    .tag {
      user-select: none;
    }
  }
</style>
