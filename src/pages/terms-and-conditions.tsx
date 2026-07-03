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
    <div className="bg-paper">
      <NavBar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-montserrat text-3xl font-bold tracking-tight text-ink sm:text-4xl">Terms &amp; Conditions</h1>
        <div className="mt-3 h-1 w-10 rounded-full bg-split-amber-500" />
        {
          data.allMdx.nodes.map((node, index) => {
            return (
              <p key={index} className="mt-8 whitespace-pre-wrap break-words text-base leading-7 text-ink-muted">{node.body}</p>
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
