#!/bin/sh

rm -rf dist/demo/
js
./node_modules/.bin/webpack --output-filename=dist/demo/build.min.js --config=webpack.demo.config.js --optimize-minimize
