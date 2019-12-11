import axios from 'axios';


export default async (query) => {
    let { data } = await axios.get(query);
    let articles = data.articles.map((article,indx)=> {
        return { content: article.content, description: article.description, 
            url: article.url, title: article.title, id:indx, saved: false  };
    })

    return articles;
}