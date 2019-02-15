#!/bin/sh

NODE_ENV=production grunt build
cp -fv ./dist/axios.js ./wx-examples/lib/axios.js
cp -fv ./dist/axios.js ./swan-examples/lib/axios.js
