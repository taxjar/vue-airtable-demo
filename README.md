# Vue.js + Airtable Demo

A simple Vue component to display a list of items powered by [Airtable](https://airtable.com/). Check out our [blog post](https://developers.taxjar.com/blog/airtable-and-vue-js-for-static-websites/) all about using Airtable and Vue.js for static websites!

## Configuration

Provide your Airtable API key and base inside `config/dev.env.js`. Tweak the `column` and `filter` attributes in `src/App.vue` to test our your Airtable project. From there, run through the build setup below.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
