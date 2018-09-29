#!/bin/sh

NODE_ENV=production grunt build
cp -fv ./dist/axios.js ./wx-examples/lib/axios.js
