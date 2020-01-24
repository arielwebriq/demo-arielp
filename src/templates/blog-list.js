import React from "react";
import { graphql, Link } from "gatsby";
import Headroom from "react-headroom";
import { Header } from "components/theme";
import { Layout, Container, SEO, Card } from "components/common";

import { Wrapper, Grid, Item, Content, Stats } from "./blogListStyles.js";
// import starIcon from "assets/icons/star.svg";
// import forkIcon from "assets/icons/fork.svg";

const Blog = ({ data }) => {
    const blogData = data.allMarkdownRemark.edges.map(blog => blog.node);
    return (
        <Layout>
			<Headroom
				style={{
					WebkitTransition: "all .5s ease-in-out",
					MozTransition: "all .5s ease-in-out",
					OTransition: "all .5s ease-in-out",
					Transition: "all .5s ease-in-out"
				}}
			>
				<Header page="blog" />
			</Headroom>
			<Container>
				<Wrapper as={Container} id="projects">
					<h2>Blogs</h2>
					<Grid>
						{blogData.map(({ frontmatter }) => {
							return (
								<Item key={frontmatter.title} href={frontmatter.path}>
									<Card>
										<Content>
											<h4>{frontmatter.title}</h4>
											<Link to={frontmatter.path}>
												<p>{frontmatter.shortdescription}</p>
											</Link>
										</Content>
									</Card>
								</Item>
							);
						})}
					</Grid>
				</Wrapper>
			</Container>
		</Layout>
    );
};

export default Blog;

export const blogQuery = graphql `
	query blogQuery {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/post/" } }) {
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
`;