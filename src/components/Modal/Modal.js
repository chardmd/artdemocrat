import React from "react";
import Modal from "react-modal";
import CaretRight from "react-icons/lib/fa/caret-right";
import CaretLeft from "react-icons/lib/fa/caret-left";
import Close from "react-icons/lib/md/close";
import findIndex from "lodash/findIndex";
import mousetrap from "mousetrap";
import * as PropTypes from "prop-types";
import { navigate, StaticQuery, graphql } from "gatsby";

import "./Modal.scss";

let posts;

Modal.setAppElement("#___gatsby");

class CustomModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    mousetrap.bind("left", () => this.previous());
    mousetrap.bind("right", () => this.next());
    mousetrap.bind("space", () => this.next());
  }

  componentWillUnmount() {
    mousetrap.unbind("left");
    mousetrap.unbind("right");
    mousetrap.unbind("space");
  }

  findCurrentIndex() {
    const index = findIndex(posts, (post) => {
      const slugPath = this.props.location.pathname.split("/c")[1];
      return post.collectionSlug.includes(slugPath);
    });
    return index;
  }

  next(e) {
    if (e) {
      e.stopPropagation();
    }
    const currentIndex = this.findCurrentIndex();
    if (currentIndex || currentIndex === 0) {
      let nextPost;
      // Wrap around if at end.
      if (currentIndex + 1 === posts.length) {
        [nextPost] = posts;
      } else {
        nextPost = posts[currentIndex + 1];
      }
      navigate(`${nextPost.collectionSlug}`);
    }
  }

  previous(e) {
    if (e) {
      e.stopPropagation();
    }
    const currentIndex = this.findCurrentIndex();
    if (currentIndex || currentIndex === 0) {
      let previousPost;
      // Wrap around if at start.
      if (currentIndex === 0) {
        [previousPost] = posts.slice(-1);
      } else {
        previousPost = posts[currentIndex - 1];
      }
      navigate(`${previousPost.collectionSlug}`);
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allCollectionJson {
              edges {
                node {
                  fields {
                    collectionSlug
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          if (!posts) {
            posts = data.allCollectionJson.edges.map((e) => e.node.fields);
          }
          return (
            <Modal
              isOpen={this.props.isOpen}
              onRequestClose={() => navigate("/")}
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  zIndex: 9999,
                },
                content: {
                  position: "absolute",
                  border: "none",
                  background: "none",
                  padding: 0,
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                },
              }}
              contentLabel="Modal"
            >
              <div onClick={() => navigate("/")} className="ModuleModal">
                <div className="wrapperBody">
                  <CaretLeft
                    className="caretLeft"
                    onClick={(e) => this.previous(e)}
                  />
                  {this.props.children}
                  <CaretRight
                    className="caretRight"
                    onClick={(e) => this.next(e)}
                  />
                </div>
                <Close onClick={() => navigate("/")} className="closeButton" />
              </div>
            </Modal>
          );
        }}
      />
    );
  }
}

export default CustomModal;
