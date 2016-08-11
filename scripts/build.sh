#!/bin/sh

rm dist/ReactInteractive.js
rm dist/ReactInteractive.min.js

./node_modules/.bin/webpack --output-filename=dist/ReactInteractive.js --config=webpack.config.js
./node_modules/.bin/webpack --output-filename=dist/ReactInteractive.min.js --config=webpack.config.js --optimize-minimize

# build ES5 modules to lib
rm -rf lib
./node_modules/.bin/babel src --out-dir lib --ignore src/demo
