<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
*{margin:0px;padding:0;box-sizing:border-box;}
/* CSS Document */
/* reset 默认样式重置 */
html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, q, em, ul, li, ol, dl, dt, dd, form, article, aside, embed, table, td, th, input, button, legend, fieldlset, blockquote, textarea, label, strong, img, cite { margin: 0; padding: 0; outline: none; }
h1, h2, h3, h4, h5, h6 { font-weight: normal; font-size: 100%; }
table { border-collapse: collapse; }
ul, li , ol, li{ list-style: none; }
img{ border: none; vertical-align:top;max-width: 100%;}
em, cite, address,i { font-style: normal; font-weight: normal; }
a { text-decoration:none; color: inherit;}
input { outline:none; border:none; background-color:transparent;}
input::-ms-clear { display:none; }
textarea { outline:none; resize:none;overflow:auto;border:none;background: transparent;}
</style>
