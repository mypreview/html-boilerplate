# HTML, Sass & Babel Boilerplate

![License](https://img.shields.io/github/license/mypreview/html-boilerplate)

Simple boilerplate for building web app with [sass/dart-sass](https://www.npmjs.com/package/sass) and [@babel/cli](https://www.npmjs.com/package/babel-cli).

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

# Build and minify style.scss file
$ npm run build:css

# Build and minify script.js file
$ npm run build:js

# Build resources and create a zip file for the project.
$ npm run build:zip

# Enforces an opinionated consistent code format.
$ npm run format

# Lint style.css file
$ npm run lint:css

# Fix style.css file
$ npm run lint:css:fix

# Lint script.js file
$ npm run lint:js

# Fix script.js file
$ npm run lint:js:fix

# Watch for changes in style.scss file
$ npm run watch:css

# Watch for changes in script.js file
$ npm run watch:js
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
└── package.json            # npm configuration file
```

## Zip-Archive
In the case where you want to customize the files included in the `zip` file, you can modify the files field in the `package.json`.

```json
{
	"files": [
		"assets/**",
		"build/**",
		"index.html"
	]
}
```

---

## Donate

If you or your company use any of my projects or like what I’m doing, please consider [making a donation](https://www.buymeacoffee.com/mahdiyazdani) so I can continue maintaining and evolving all my projects and new ones. I’m in this for the long run. 

<a href="https://www.buymeacoffee.com/mahdiyazdani" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="165" /></a>
