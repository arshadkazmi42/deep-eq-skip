# deep-eq-skip

[![Build Status](https://travis-ci.com/arshadkazmi42/deep-eq-skip.svg?branch=master)](https://travis-ci.com/arshadkazmi42/deep-eq-skip)

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

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
<a href="https://github.com/maikenegreiros"><img src="https://github.com/maikenegreiros.png" width="30" /></a>
<a href="https://github.com/radulucut"><img src="https://github.com/radulucut.png" width="30" /></a>
