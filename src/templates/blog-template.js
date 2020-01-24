import React from "react";
import { graphql } from "gatsby";
import { Layout, Container, SEO, Card } from "components/common";
import Headroom from "react-headroom";
import { Header } from "components/theme";

const BlogTemplate = ({ data }) => {
    console.log(data);
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
				<BlogTemplate>
					<h1>Title</h1>
				</BlogTemplate>
			</Container>
		</Layout>
    );
};

export default BlogTemplate;

export const query = graphql `
	query markdownRemark($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				path
				shortdescription
				date
			}
			html
		}
	}
`;