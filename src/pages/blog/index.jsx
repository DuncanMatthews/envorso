import React from "react";
import SEO from "@/src/common/seo";
import Blog from "../../components/blog-pages/blog";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Envorso Blog"} />
      <Blog />
    </>
  );
};

export default index;
