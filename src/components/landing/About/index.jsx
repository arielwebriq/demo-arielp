import React from "react";
import { Container } from "components/common";
import { Wrapper, Details } from "./styles";

export const About = () => (
    <Wrapper as={Container} id="about">
		<h1>As a full-stack developer</h1>
		<Details>
			<p>
				<strong>Front-end development</strong> - Converting bootstrap designs to
				react/gatsby template, responsive and SEO ready. Increased website
				performance to more than 90%. Experience on using react lifecycle
				method, higher order components, graphql and, etc.
			</p>
			<p>
				<strong>Back-end development</strong> - knowledge includes REST-API
				Integration, Apollo Graphql Server/Client Implementation, Plugins and
				Serverless Functions.
			</p>
		</Details>
	</Wrapper>
);