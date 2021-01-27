# Curriculum Vuetae
> A simple curriculum vitae boilerplate made with Vue.js that supports multiple languages

<p>
    <a href="https://github.com/hacklover/curriculum-vuetae/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://buefy.org"><img src="https://img.shields.io/badge/code_style-buefy-7957d5.svg" /></a>
    <a href="https://patreon.com/hacklover"><img src="https://img.shields.io/badge/become-a%20patron-orange" alt="Become a Patron" /></a>
    <a href="https://discord.com/invite/xHBSEZR7sn"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord" /></a>
</p>

## Features
- Supports multiple languages
- Supports multiple themes
- Easily customizable themes
- Made with [Vue.js](https://vuejs.org) & [Buefy](https://buefy.org)

## Quick start
- Install dependencies
  ```
  npm install
  ```

- Configure available languages and the active theme by editing `cv.config.js`
- Fill the CV with your information by editing `src/locales/<your-lang>.json` 
- Customize the background header replacing it in `public/assets/background.jpg`
- Customize theme colors by editing `src/themes/<your-theme>/theme.js`
- Check the commands below to run it in development mode or to build it as a static website
- You can publish it on Netlify, GitHub, or export it as PNG/PDF using your browser

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## License
Code released under [MIT](https://github.com/hacklover/curriculum-vuetae/blob/master/LICENSE) license.