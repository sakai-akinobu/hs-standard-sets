# Hearthstone standard cards sets
![npm version](https://img.shields.io/npm/v/hs-standard-sets.svg?style=flat)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![CircleCI](https://circleci.com/gh/sakai-akinobu/hs-standard-sets.svg?style=svg)](https://circleci.com/gh/sakai-akinobu/hs-standard-sets)

hs-standard-sets is a utility that returns the standard card set of Hearthstone available at a date.

## Usage

Returns the name of the standard card set valid at the date given in the first argument.
If the first argument is omitted, it returns the name of the standard card set valid at the time of execution.

Giving the date before the standard rule is enforced will return all released card sets as of that date.

The name of each card set conforms to "set" property provided by [HearthstoneJSON](https://hearthstonejson.com/).

### in Node.js

```javascript
const sets = require('hs-standard-sets').sets;

sets();
// => [ 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY' ]

sets(new Date('2017-08-20'));
// => [ 'OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN' ]
```

### in Browser

```html
<script src="/path/to/hs-standard-sets.js"></script>
<script>
HsStandardSets.sets();
// => [ 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY' ]

HsStandardSets.sets(new Date('2017-08-20'));
// => [ 'OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN' ]
</script>
```

## Installation

```
npm install --save hs-standard-set
```

## Test

```
npm run test
```

## License

MIT licensed.
