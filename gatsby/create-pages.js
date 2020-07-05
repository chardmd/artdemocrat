const createPostsPages = require("./build-pages/create-post-pages");
const createArtistPages = require("./build-pages/create-artist-pages");

const createPages = async ({ graphql, actions, reporter }) => {
  // create post pages
  await createPostsPages({ graphql, actions, reporter });

  // create artist pages
  await createArtistPages({ graphql, actions, reporter });
};

module.exports = createPages;
