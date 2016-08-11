#!/bin/sh

rm dist/ReactFloating.js
rm dist/ReactFloating.min.js

./node_modules/.bin/webpack --output-filename=dist/ReactFloating.js --config=webpack.config.js
./node_modules/.bin/webpack --output-filename=dist/ReactFloating.min.js --config=webpack.config.js --optimize-minimize

# build ES5 modules to lib
rm -rf lib
./node_modules/.bin/babel src --out-dir lib --ignore src/demo
