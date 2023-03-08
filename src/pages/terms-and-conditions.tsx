import React from "react";
import { graphql, PageProps, HeadFC } from 'gatsby';
import NavBar from "../components/navbar";
import Footer from "../components/footer";

type BlogNode = {
  body: string;
};

type BlogData = {
  allMdx: {
      nodes: BlogNode[];
  };
};

const TermsAndConditions: React.FC<PageProps<BlogData>> = ({ data }) => {

  return (
    <div className="isolate bg-white">
      <NavBar />
      <main className="flex mx-auto max-w-5xl content-center justify-center items-center p-5 sm:p-10 lg:p-20">
        {/* <PrivacyPolicyText /> */}
        {
          data.allMdx.nodes.map((node) => {
            return (
              <p className="whitespace-pre-wrap display-linebreak break-words-per-line">{node.body}</p>
            );
          })
        }
      </main>
      <Footer />
    </div>
  );
};

export const query = graphql`
query {
    allMdx(filter: {frontmatter: {title: {eq: "Terms & Conditions"}}}) {
      nodes {
        body
      }
    }
  }
`;

export default TermsAndConditions;

export const Head: HeadFC = () => <title>Terms of Service | Split Counter App</title>;
