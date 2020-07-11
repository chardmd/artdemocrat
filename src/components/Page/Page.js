import React, { useRef, useEffect } from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <Container ref={pageRef}>
      <div>
        {title && <h1>{title}</h1>}
        <div>{children}</div>
      </div>
    </Container>
  );
};

export default Page;
