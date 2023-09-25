import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [position, setPostion] = useState(0);
  const [postings, setPostings] = useState([]);

  const navi = useNavigate();

  const moveCarousel = (e) => {
    if (position > -200 && e.target.classList.contains(styles.carousel_left)) {
      setPostion(position - 100);
    }
    if (position !== 0 && e.target.classList.contains(styles.carousel_right)) {
      setPostion(position + 100);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts/all")
      .then((data) => setPostings(data.data.data));
  }, []);

  // popularData
  const popular = postings.find((el) => Math.max(el.likes));

  return (
    <div className={styles.main_container}>
      {popular ? (
        <div
          onClick={() => {
            navi(`/posts/${popular._id}`);
          }}
          id={popular._id}
          className={styles.popular_post}
        >
          <div className={styles.popular_post_content}>
            <h1>{popular.title}</h1>
            <h2>{popular.createdAt}</h2>
          </div>
          <div
            className={styles.main_post_back}
            style={{ backgroundImage: `url(${popular.url})` }}
          ></div>
        </div>
      ) : null}

      <section className={styles.main_carousel_wrapper}>
        {position > -200 && (
          <button
            onClick={moveCarousel}
            className={`${styles.carousel_left} ${styles.left}`}
          >
            {"<"}
          </button>
        )}

        {position < 0 && (
          <button
            onClick={moveCarousel}
            className={`${styles.carousel_right} ${styles.right}`}
          >
            {">"}
          </button>
        )}

        <div
          className={styles.carousel_container}
          style={{ transform: `translateX(${position}vw)` }}
        >
          {postings?.map((el) => {
            return (
              <div
                onClick={() => {
                  navi(`/posts/${el._id}`);
                }}
                key={el._id}
                className={styles.carousel_item_wrapper}
              >
                <div className={styles.item_content}>
                  <h2>{el.title}</h2>
                  <h4>{el.createdAt}</h4>
                </div>

                <div
                  className={styles.carousel_item}
                  style={{ backgroundImage: `url(${el.url})` }}
                ></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
