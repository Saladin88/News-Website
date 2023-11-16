import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header.jsx";
import Article from "./Article";

export default function Home() {
  const [articlesData, setArticlesData] = useState([]);
  const apiKey = "58a09dd630d64eb9b3db1e60ce6554aa";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const formatedData = data.articles.map((article) => {
          return {
            title: article.title,
            author: article.author,
            description: article.description,
            originUrl: article.url,
            origin: article.source.name,
          };
        });
        setArticlesData(formatedData);
      });
  }, []);

  return (
    <div>
      <Header />
      <section className={styles.article_container}>
        {articlesData.map((item, index) => (
          <Article key={index} {...item} />
        ))}
      </section>
    </div>
  );
}
