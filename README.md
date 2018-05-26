# prettier-eslint-check

> ✨ Check that all files match [prettier-eslint](https://github.com/prettier/prettier-eslint) code style.

[![npm version](https://img.shields.io/npm/v/prettier-eslint-check.svg?style=flat)](https://www.npmjs.com/package/prettier-eslint-check) [![NPM downloads](https://img.shields.io/npm/dm/prettier-eslint-check.svg?style=flat)](https://npmjs.com/package/prettier-eslint-check) [![Build Status](https://travis-ci.org/u3u/prettier-eslint-check.svg?branch=master)](https://travis-ci.org/u3u/prettier-eslint-check) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg)](#contributors)

## Install

```
$ yarn add prettier prettier-eslint-cli prettier-eslint-check --dev
```

> Make sure you have `prettier` and `prettier-eslint-cli` as a dependency (or globally).

## Usage

Use it in the test script in your package.json:

```json
  "scripts": {
    "test": "prettier-eslint-check src/**/*.js"
  },
```

All args are forwarded to prettier:

```json
  "scripts": {
    "test": "prettier-eslint-check --single-quote --trailing-comma es5 src/**/*.js"
  },
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/20062482?v=4" width="100px;"/><br /><sub><b>さくら</b></sub>](https://qwq.cat)<br />[💻](https://github.com/u3u/prettier-eslint-check/commits?author=u3u "Code") [📖](https://github.com/u3u/prettier-eslint-check/commits?author=u3u "Documentation") [⚠️](https://github.com/u3u/prettier-eslint-check/commits?author=u3u "Tests") | [<img src="https://avatars3.githubusercontent.com/u/1241714?v=4" width="100px;"/><br /><sub><b>Hexacta</b></sub>](http://www.hexacta.com)<br />[💻](https://github.com/u3u/prettier-eslint-check/commits?author=hexacta "Code") [📖](https://github.com/u3u/prettier-eslint-check/commits?author=hexacta "Documentation") [⚠️](https://github.com/u3u/prettier-eslint-check/commits?author=hexacta "Tests") [🤔](#ideas-hexacta "Ideas, Planning, & Feedback") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

## Author

**prettier-eslint-check** © [u3u](https://github.com/u3u), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by u3u with help from contributors ([list](https://github.com/u3u/qzone-cli/contributors)).

> [qwq.cat](https://qwq.cat) · GitHub [@u3u](https://github.com/u3u)
