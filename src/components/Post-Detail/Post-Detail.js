import React from "react";
import Img from "gatsby-image";

import Userbar from "./Userbar";
import Description from "./Description";

import styles from "./Post-Detail.module.scss";

const PostDetail = ({ collectionDetail, artist }) => {
  const { bigImage, category, description, id, title } = collectionDetail;
  const { big } = bigImage.childImageSharp;

  const { authorName, smallImage } = artist;
  const { small } = smallImage.childImageSharp;

  const authorAvatar = small.src;
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.postDetail}>
      <div className={styles.mainWrapper}>
        <Userbar avatar={authorAvatar} title={title} />
        <div className={styles.detailWrapper}>
          <Description
            authorName={authorName}
            category={category}
            description={description}
          />
        </div>
      </div>
      <div to={`/${id}/`} className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Img fluid={{ ...big }} className={styles.imageItem} />
          <div className={styles.pad} />
        </div>
      </div>
      <div className={styles.detail}>
        <Description />
      </div>
    </div>
  );
};

export default PostDetail;
