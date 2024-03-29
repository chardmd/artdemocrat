import React from "react";
import Img from "gatsby-image";

import Userbar from "./Userbar";
import Description from "./Description";
import Download from "./Download";
import Share from "../Share";

import styles from "./Post-Detail.module.scss";

const PostDetail = ({ collectionDetail, artist }) => {
  const {
    bigImage,
    category,
    originalImage,
    description,
    id,
    title,
    fields: { collectionSlug },
  } = collectionDetail;
  const { big } = bigImage.childImageSharp;

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
        <Share
          slug={collectionSlug}
          title={title}
          options={{ size: 28, round: true }}
        />
        <div className={styles.detailWrapper}>
          <Description
            authorName={authorName}
            category={category}
            description={description}
            artistSlug={artistSlug}
          />
          <Download originalImage={originalImage} />
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
        <Download originalImage={originalImage} />
      </div>
    </div>
  );
};

export default PostDetail;
