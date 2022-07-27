# deep-eq-skip

[![Build](https://github.com/arshadkazmi42/deep-eq-skip/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/deep-eq-skip/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/deep-eq-skip.svg)](https://www.npmjs.com/package/deep-eq-skip)
[![NPM Downloads](https://img.shields.io/npm/dt/deep-eq-skip.svg)](https://www.npmjs.com/package/deep-eq-skip)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/deep-eq-skip.svg)](https://github.com/arshadkazmi42/deep-eq-skip)
[![LICENSE](https://img.shields.io/npm/l/deep-eq-skip.svg)](https://github.com/arshadkazmi42/deep-eq-skip/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/deep-eq-skip.svg)](https://github.com/arshadkazmi42/deep-eq-skip/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/deep-eq-skip.svg)](https://github.com/arshadkazmi42/deep-eq-skip/commits/master)

Validates two jsons with skipping keys

> Give us a :star: if you like our work :heart:

## Install

```
$ npm install deep-eq-skip --save
```

## Usage

```javascript
const deepEqSkip = require('deep-eq-skip');

const GIVEN_JSON = {
  'name': 'deep-eq-skip',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/deep-eq-skip',
    'language': 'js'
  }
};

const EXPECTED_JSON = {
  'name': 'deep-equal-skip',
  'author': 'Arshad Kazmi',
  'repository': {
    'url': 'https://github.com/arshadkazmi42/deep-equal-skip',
    'language': 'js'
  }
};

const isEqual = deepEqSkip(GIVEN_JSON, EXPECTED_JSON, ['name', 'url']);
// Output -> true

const isEqual = deepEqSkip(GIVEN_JSON, EXPECTED_JSON, []);
// Throws error: Expected "deep-equal-skip" found "deep-eq-skip"

const isEqual = deepEqSkip([1, 2, 3], { name: 1});
// Throws error: Expected undefined found 1

const isEqual = deepEqSkip('deep-eq-skip', 'deep-eq-skip');
// Output -> true
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/deep-eq-skip/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

