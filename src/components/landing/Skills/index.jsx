import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
    <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Ariel and I’m a Full-stack developer!" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
          A full-stack developer based in Cebu, Philippines. Prior to becoming
          full-stack developer, I worked as a Quality Assurance Engineer, and as
          a Junior Digital Marketing Specialist. I eventually decided to change my
          career into being a full-stack developer so I could enjoy learning new
          technologies, coding and adapting to new technology trends. And… I’ve
          been so happy with my current career... :)
          <br />
          <br />
          During my free time, I take web development, mountaineering and survival courses, mountain trekking and camping, and star gazing.
          <br />
          <br />
          I'm currently working at Webriq Goes Mad, Inc --- is pioneering Web
          Design as a Service concept (WSaaS) Company. I am also a co-organizer
          of React Cebu, a non-profit community in the hope of sharing
          knowledge, and upskilling local web developers.
        </p>

        <Button as={AnchorLink} href="#contact">
          Contact Me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);