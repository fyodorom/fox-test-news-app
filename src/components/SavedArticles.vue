<template>
<div class="save-articles-container">
  <div v-if="savedArticles.length">Saved Articles</div>
  <div v-bind:key="index" v-for="(saved,index) in savedArticles">
    {{index}}) <a v-bind:href="saved.url"><span class="quick-title">{{saved.title}}</span></a>
  </div>
</div>
</template>

<script>
export default {
    name: "SavedArticles",
    props: ["savedArticles"]
}
</script>
<style>
    .quick-title {
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        padding: 5px;
        cursor: pointer;
    }
    .save-articles-container {
        margin: 10px 0px 20px 0px;
    }
</style>