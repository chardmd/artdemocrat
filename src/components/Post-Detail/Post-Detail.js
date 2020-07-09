import React from "react";
import Img from "gatsby-image";

import Userbar from "./Userbar";
import Description from "./Description";
import Download from "./Download";

import styles from "./Post-Detail.module.scss";

const PostDetail = ({ collectionDetail, artist }) => {
  const { bigImage, category, description, id, title } = collectionDetail;
  const { big } = bigImage.childImageSharp;
  const imgSrc = big.src;

  const {
    authorName,
    smallImage,
    fields: { artistSlug },
  } = artist;
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
            artistSlug={artistSlug}
          />
          <Download imgSrc={imgSrc} />
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
        <Download imgSrc={imgSrc} />
      </div>
    </div>
  );
};

export default PostDetail;
