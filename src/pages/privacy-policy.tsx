import React from "react";
import { graphql, PageProps, HeadFC } from 'gatsby';
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { MDXProvider } from "@mdx-js/react";
//import PrivacyPolicyText from "../content/privacy-policy.mdx";

type BlogNode = {
    body: string;
};

type BlogData = {
    allMdx: {
        nodes: BlogNode[];
    };
};

const PrivacyPolicy: React.FC<PageProps<BlogData>> = ({ data }) => {

    return (
        <div className="isolate bg-white">
            <NavBar />
            <main className="flex mx-auto max-w-5xl content-center justify-center items-center p-5 sm:p-10 lg:p-20">
                {/* <PrivacyPolicyText /> */}
                <MDXProvider>
                    {
                        data.allMdx.nodes.map((node, index) => {
                            return (
                                <article key={index}>
                                    <p className="whitespace-pre-wrap display-linebreak break-words-per-line">{node.body}</p>
                                </article>
                            );
                        })
                    }
                </MDXProvider>
            </main>
            <Footer />
        </div>
    );
};

export const query = graphql`
query {
    allMdx(filter: {frontmatter: {title: {eq: "Privacy Policy"}}}) {
      nodes {
        body
      }
    }
  }
`;

export default PrivacyPolicy;

export const Head: HeadFC = () => <title>Privacy Policy | Split Counter App</title>;
