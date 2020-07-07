/* eslint-disable operator-linebreak */
import * as PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import PostDetail from "../components/Post-Detail";
import SEO from "../components/SEO";

import Layout from "../layouts"; // layout should be the last one, to prevent the 'conflicting order' warning during 'yarn run build'

const propTypes = {
  data: PropTypes.shape({
    collectionDetail: PropTypes.object.isRequired,
    artist: PropTypes.object.isRequired,
  }),
};

const CollectionTemplate = ({ data, location }) => {
  const { collectionDetail, artist } = data;

  let isModal = false;
  // We don't want to show the modal if a user navigates
  // directly to a post so if this code is running on Gatsby's
  // initial render then we don't show the modal, otherwise we
  // do.
  if (
    typeof window !== "undefined" &&
    window.___GATSBY_INITIAL_RENDER_COMPLETE
  ) {
    isModal = true;
  }

  return (
    <Layout location={location} isModal={isModal}>
      <SEO
        seoTitle={collectionDetail.title}
        seoDescription={collectionDetail.description}
        seoImage={collectionDetail.image}
        seoSlug={collectionDetail.fields.collectionSlug}
      />
      <PostDetail collectionDetail={collectionDetail} artist={artist} />
    </Layout>
  );
};

CollectionTemplate.propTypes = propTypes;

export default CollectionTemplate;

// The post template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query($id: String!, $authorId: Int!) {
    # Select the post which equals this id.
    collectionDetail: collectionJson(id: { eq: $id }) {
      ..._Collection
      bigImage: image {
        childImageSharp {
          # Here we query for *multiple* image thumbnails to be
          # created. So with no effort on our part, 100s of
          # thumbnails are created. This makes iterating on
          # designs effortless as we change the args
          # for the query and we get new thumbnails.
          big: fluid(maxWidth: 640, maxHeight: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    # select the artist
    artist: artistJson(authorId: { eq: $authorId }) {
      ..._Artist
      smallImage: image {
        childImageSharp {
          small: fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
