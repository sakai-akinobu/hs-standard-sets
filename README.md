# Hearthstone standard cards sets
![npm version](https://img.shields.io/npm/v/hs-standard-sets.svg?style=flat)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![CircleCI](https://circleci.com/gh/sakai-akinobu/hs-standard-sets.svg?style=svg)](https://circleci.com/gh/sakai-akinobu/hs-standard-sets)

hs-standard-sets is a utility that returns standard Hearthstone card sets available on a given date.

## Usage

Returns the standard card sets that matches the conditions given by the options.

### Options

- date: Optional. Returns available card sets at the given date. If omitted, the current date will be used.
- withoutClassic: Default `false`. If set to `true`, returns card sets excluding classic sets.
- isExpired: Default `false`. If set to `true`, returns expired card sets.

The name of each card set conforms to "set" property provided by [HearthstoneJSON](https://hearthstonejson.com/).

### in Node.js

```javascript
import {sets} from 'hs-standard-sets';
// const sets = require('hs-standard-sets').sets;

sets(); // As of September 3, 2018
// => [ 'CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY' ]

sets({date: new Date('2017-08-20')});
// => [ 'CORE', 'EXPERT1', 'OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN' ]

sets({withoutClassic: true});
// => [ 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY' ]

sets({isExpired: true});
// => [ 'NAXX', 'GVG', 'BRM', 'TGT', 'LOE', 'OG', 'KARA', 'GANGS' ]
```

### in Browser

```html
<script src="https://unpkg.com/hs-standard-sets/lib/index.js"></script>
<script>
HsStandardSets.sets(); // As of September 3, 2018
// => [ 'CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY' ]

HsStandardSets.sets({date: new Date('2017-08-20')});
// => [ 'CORE', 'EXPERT1', 'OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN' ]

HsStandardSets.sets({withoutClassic: true});
// => [ 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY' ]

HsStandardSets.sets({isExpired: true});
// => [ 'NAXX', 'GVG', 'BRM', 'TGT', 'LOE', 'OG', 'KARA', 'GANGS' ]
</script>
```

## Installation

```
npm install --save hs-standard-sets
```

## Test

```
npm run test
```

## License

MIT license
