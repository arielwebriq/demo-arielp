const path = require('path');

const makeRequest = (graphql, request) =>
    new Promise((resolve, reject) => {
        // Query for nodes to use in creating pages.
        resolve(
            graphql(request).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }
                return result
            })
        )
    })

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPages = makeRequest(
        graphql,
        `query {
				  allMarkdownRemark(filter:{fileAbsolutePath: {regex:"\/post/"}}) {
				    edges {
				      node {
				        id
				        frontmatter {
				          title
				          path
				          shortdescription
				          date
				        }
				      }
				    }
				  }
				}
  		`
    ).then(result => {
        //Create main category pages
        result.data.allMarkdownRemark.edges.forEach(data => {
            createPage({
                path: data.node.frontmatter.path,
                component: path.resolve(`./src/templates/blog-template.js`),
                context: {
                    id: data.node.id,
                },
            })
        })

        const posts =
            result.data.allMarkdownRemark.edges.map(post => post.node) || []
        const postsPerPage = 12
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve(`./src/templates/blog-list.js`),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                },
            })
        })
    })
    return Promise.all([blogPages])
}