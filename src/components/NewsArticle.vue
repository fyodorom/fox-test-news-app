<template>
<div class="article-container">
  <div class="section-container">
    <div v-if="article.saved === false" class="add-btn" v-on:click="saveArticle(article)">Save Article</div>
  </div>
  <div class="section-container">
    <div class="left-col">Title</div>
    <div class="right-col">{{article.title}}</div>
  </div>
  <hr/>
   <div class="section-container">
    <div class="left-col">Description</div>
    <div class="right-col">{{article.description}}</div>
  </div>
   <div class="section-container">
    <div class="left-col">Content</div>
    <div class="right-col">{{article.content}}</div>
  </div>
</div>
</template>

<script>
export default {
    name: "NewsArticle",
    props: ["article"],
    methods: {
      saveArticle(article) {
         this.$store.dispatch('SAVE_ARTICLE',article);
      }
    }
}
</script>

.container {
  display: flex; /* or inline-flex */
}

<style>
  .article-container {
    padding: 15px;
    border: 1px solid gray;
    margin-bottom: 10px;
  }
  .section-container {
    display: flex;
    padding: 10px;
    text-align: left;
  }
  .left-col {
    width: 30%;
  }
  .right-col {
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .add-btn {
    border-radius: 50px;
    border: 1px solid gray;
    padding: 5px;
    width: 150px;
    text-align: center;
  }
  .add-btn:hover {
    background: green;
    color: white;
    cursor: pointer;
  }
</style>