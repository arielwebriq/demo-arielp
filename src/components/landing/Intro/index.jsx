import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
    <Wrapper>
		<Header page="home" />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!, I'm Ariel.</h1>
				<h4>Full-stack Developer, and a Mountaineer.</h4>
				<Button as={AnchorLink} href="#contact">
					Contact Me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)