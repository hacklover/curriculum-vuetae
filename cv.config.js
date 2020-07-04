export default {
  // languages configuration
  // files are located in "src/locales/<lang>.json"
  locale: {
    list: [
      'it',
      'en'
    ],
    current: 'en'
  },

  // theme colors
  theme: {
    app: {
      common: {
        background: 'inherit',
        text: '#2c3e50',
        link: '#167df0',
        heading: '#a2a2a2',
        subtitle: '#888',
        separator: '#D5D5D5',
        table: 'rgba(0, 0, 0, 0.03)'
      },
      nav: {
        background: 'initial',
        text: 'initial',
        language: 'initial'
      },
      header: {
        title: 'white',
        subtitle: 'grey',
        backgroundColor: '#111',
        backgroundImage: 'url(assets/background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundAttachment: 'fixed',
      },
      footer: {
        background: '#eaeaea',
        text: '#CCC',
        link: '#BBB'
      }
    },
    experience: {
      title: '#7957d5',
      text: 'initial',
      tag: {
        primary: '#7957d5',
        secondary: '#777'
      },
      project: {
        title: '#2fb1b9',
        text: '#888',
        tag: {
          primary: '#2fb1b9',
          secondary: '#777'
        }
      }
    }
  },

  // feel free to hide the copyright notice but remember to
  // donate if you like or you have been hired using Curriculum Vuetae
  showCopyright: true

  // thank you <3
  // https://www.patreon.com/hacklover
}