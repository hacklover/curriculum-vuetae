# Curriculum Vuetae
> A simple curriculum vitae boilerplate made with Vue.js that supports multiple languages

<p>
    <a href="https://github.com/hacklover/curriculum-vuetae/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://buefy.org"><img src="https://img.shields.io/badge/code_style-buefy-7957d5.svg?style=flat-square" /></a>
    <a href="https://www.patreon.com/hacklover"><img src="https://img.shields.io/badge/become-a%20patron-orange" alt="Become a Patron" /></a>
    <a href="https://discord.gg/jActPSd"><img src="https://img.shields.io/discord/520023979595923476.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" alt="Join us on Discord" /></a>
</p>

## Features
- Build your modern curriculum vitae
- Supports multiple languages
- Supports multiple themes
- Easily customizable themes
- Easy text management
- Made with [Vue.js](https://vuejs.org) & [Buefy](https://buefy.org)

## Quick start
- Install dependencies
  ```
  npm install
  ```

- Configure available languages and active theme by editing `cv.config.js`
- Fill your CV with details and experiences by editing `src/locales/<your-lang>.json` 
- Customize the background header replacing it in `public/assets/background.jpg`
- Customize theme colors by editing `src/themes/<your-theme>/theme.js`
- Check the commands below to enable live preview and compile your curriculum vitae
- You can export it as PNG or PDF with some browser extension like [FireShot](https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg)

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