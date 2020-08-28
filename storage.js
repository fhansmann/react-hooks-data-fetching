/* import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


const Home = () => {
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                        title
                    }
                      html
                  }
              }
          }
      }
  `)
  
  console.log(data)

  return(
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: node.html }}  /> 
        </div>
      ))}
    </div>
  )
}


export default Home

/*