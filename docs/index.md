---
title: Protocol Messages
description: Bitcoin Protocol Messages
---
# Protocol

## Description

The `bitcore-protocol` module provides Bitcoin protocol messages for [Bitcore](https://github.com/bitpay/bitcore). Message represents data sent to and from a Peer. For detailed technical information about the bitcoin protocol, please visit the [Protocol Specification](https://en.bitcoin.it/wiki/Protocol_specification) on the Bitcoin Wiki.

## Installation

Bitcore protocol is implemented as a seperate module.

For node projects:
```bash
npm install bitcore-protocol --save
```

## Quick Start

```javascript
var protocol = require('bitcore-protocol');
var messages = new protocol.Messages();

```
