import React, { useEffect, useState } from "react";
import styles from "./PostPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostPage() {
  const param = useParams();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${param.id}`).then((data) => {
      setPostData(data.data.data);
    });
  }, [param]);

  return (
    <div className={styles.post_container}>
      <div className={styles.post_image_container}>
        <div className={styles.post_carousel_wrapper}>
          <div className={styles.post_carousel}>
            {postData.url?.map((img, i) => {
              return (
                <div key={i} className={styles.post_carousel_item}>
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Contents */}
    </div>
  );
}
