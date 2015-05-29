Bitcore Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/bitcore-protocol.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-protocol)
[![Build Status](https://img.shields.io/travis/bitpay/bitcore-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/bitcore-protocol)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-protocol.svg?style=flat-square)](https://coveralls.io/r/bitpay/bitcore-protocol?branch=master)

`bitcore-protocol` adds [Bitcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Bitcore. For peer-to-peer networking features please see [Bitcore P2P](https://github.com/bitpay/bitcore-p2p).

See [the main bitcore repo](https://github.com/bitpay/bitcore) for more information.

## Getting Started

```sh
npm install bitcore-protocol
```

The bitcoin protocol specifies a set of [messages](https://en.bitcoin.it/wiki/Protocol_specification) that can be sent from peer to peer on the Bitcoin network.

```js
var protocol = require('bitcore-protocol');
var messages = new protocol.Messages();

var message = messages.Ping();

message = messages.GetData.forTransaction(txHash);
message = messages.GetData.forBlock(blockHash);
message = messages.Inventory.forTransaction(txHash);

```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
