import React from "react";
import { graphql, PageProps, HeadFC } from 'gatsby';
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { MDXProvider } from "@mdx-js/react";

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
        <div className="bg-paper">
            <NavBar />
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="font-montserrat text-3xl font-bold tracking-tight text-ink sm:text-4xl">Privacy Policy</h1>
                <div className="mt-3 h-1 w-10 rounded-full bg-split-blue-500" />
                <MDXProvider>
                    {
                        data.allMdx.nodes.map((node, index) => {
                            return (
                                <article key={index}>
                                    <p className="mt-8 whitespace-pre-wrap break-words text-base leading-7 text-ink-muted">{node.body}</p>
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
