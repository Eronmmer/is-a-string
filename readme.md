# is-a-string

Returns true if the input is a string.

## Usage

``` js
var isAString = require('is-a-string');

isAString(3);
//=> false
isAString("3");
//=> true
isAString("Hey");
//=> true
isAString([1, 2, 3]);
//=> false
```

## Running tests

```bash
yarn 
yarn test
```

⚡
