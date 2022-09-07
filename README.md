# HTML, Sass & Babel Boilerplate

![License](https://img.shields.io/github/license/mypreview/html-boilerplate)

Simple boilerplate for building web app with [node-sass](https://github.com/sass/node-sass) and [@babel/cli](https://github.com/babel/babel/tree/master/packages/babel-cli).

---

## Install

```bash
# Install all dependencies
$ npm install

# [optional] Check and update all dependencies
$ npm outdated
$ npm update
```

## Usage

```bash
# Build and minify both resources
$ npm run build

# Build and minify main.js file
$ npm run build:js

# Watch for changes in main.js file
$ npm run watch:js

# Build and minify main.scss file
$ npm run build:css

# Watch for changes in main.scss file
$ npm run watch:css

# Lint main.js file
$ lint:js

# Fix main.js file
$ lint:js:fix
```

## Structure

```bash
.                           # root
├── build                   # directory for production
│   ├── css                 # directory for minified css files
│   └── js                  # directory for minified js files
├── src                     # directory for source code
│   ├── js                  # directory for js files
│   │   └── script.js       # main (index) js file
│   └── scss                # directory for scss files
│       ├── functions.scss  # scss file for functions
│       ├── style.scss      # main (index) scss file
│       └── variables.scss  # scss file for variables
├── index.html              # index file for web app
└── package.json      		# npm configuration file
```

---

## Donate

If you or your company use any of my projects or like what I’m doing, please consider [making a donation](https://www.buymeacoffee.com/mahdiyazdani) so I can continue maintaining and evolving all my projects and new ones. I’m in this for the long run. 

<a href="https://www.buymeacoffee.com/mahdiyazdani" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="165" /></a>
