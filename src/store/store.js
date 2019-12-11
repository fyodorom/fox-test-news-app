import Vue from 'vue';
import Vuex from 'vuex';
import queryAPI from '../api/news';

// Constants
const GOOGLE_NEWS_QUERY_ROOT = "https://newsapi.org/v2/everything?";
const GOOGLE_NEWS_DEFAULT_ROOT = "https://newsapi.org/v2/top-headlines?sources=google-news"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    newArticles : null,
    savedArticles : [],
  },
  getters : {
    NEW_ARTICLES : state => {
      return state.newArticles;
    },
    SAVED_ARTICLES : state => {
      return state.savedArticles;
    }
  },
  mutations: {
    SET_ARTICLES : (state,payload) => {
      state.newArticles = payload
    },
    ADD_ARTICLE : (state,payload) => {
      payload.saved = true;
      state.savedArticles.push(payload);
    },
  },
  actions:{
    GET_QUERIED_NEWS : async (context,payload) => {
      const queryString = `${GOOGLE_NEWS_QUERY_ROOT}q=${payload}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
      let data = await queryAPI(queryString);
      context.commit('SET_ARTICLES', data)
    },
    SAVE_ARTICLE : async (context,payload) => {
      context.commit('ADD_ARTICLE',payload)
    },
    GET_DEFAULT_NEWS : async (context) => {
      const queryString = `${GOOGLE_NEWS_DEFAULT_ROOT}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
      let data = await queryAPI(queryString);
      context.commit('SET_ARTICLES', data)
    }
  }
});

export default store;