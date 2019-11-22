import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { RichText } from 'prismic-reactjs'

export const query = graphql`
  {
    prismic {
      allHome_pages {
        edges {
          node {
            title
            introduction
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  const doc = data.prismic.allHome_pages.edges.slice(0,1).pop();

  if(!doc) return null;

  return (
    <Layout>
      <SEO title="Home" />
      {RichText.render(doc.node.title)}
      {RichText.render(doc.node.introduction)}
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}


export default IndexPage
