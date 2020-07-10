import React from "react";
import Layout from "../layouts"; // layout should be the last one, to prevent the 'conflicting order' warning during 'yarn run build'

const NotFoundTemplate = ({ location }) => (
  <Layout location={location}>
    <div>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundTemplate;
