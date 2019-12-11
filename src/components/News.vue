<template>
  <div class="news-container">
    <div class="search-bar">
      Search Articles
      <input class="search-input" type="text" placeholder="Top Headlines" @keydown="queryNews($event)">
    </div>
    <div>
      <SavedArticles v-bind:savedArticles="savedArticleList" />
    </div>
    <div v-bind:key="index" v-for="(article,index) in newArticleList">
      <NewsArticle v-bind:article="article" />
    </div>
  </div>
</template>

<script>
  import NewsArticle from './NewsArticle.vue';
  import SavedArticles from './SavedArticles.vue';
  import _ from 'lodash';

  export default {
    components: {
      NewsArticle,
      SavedArticles
    },
    methods: {
      queryNews: _.debounce(function(event) {
          this.$store.dispatch('GET_QUERIED_NEWS',event.target.value)
        }, 400)
    },
    mounted(){
        this.$store.dispatch('GET_DEFAULT_NEWS',)
    },
    computed : {
      newArticleList(){
        return this.$store.getters.NEW_ARTICLES
      },
      savedArticleList(){
        return this.$store.getters.SAVED_ARTICLES
      }
  },
    name: 'News'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.news-container {
  padding: 50px;
}
.search-bar {
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
  width: 100%;
}
.search-input {
  width: 300px;
  height: 20px;
  border-radius: 5px;
}
div {
  text-align: left;
}
</style>
