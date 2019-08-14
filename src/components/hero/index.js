import React from "react"
import { Link } from "react-scroll";
import { StyledHero, Heading, HeroContent, Paragraph, Container, ContactBTN, SocialList} from './style';

import TwitterIcon from "../../assets/icons/twitter.inline.svg"
import FacebookIcon from "../../assets/icons/facebook.inline.svg"
import InstagramIcon from "../../assets/icons/instagram.inline.svg"
import LinkedinIcon from "../../assets/icons/linkedin.inline.svg"
import GithubIcon from "../../assets/icons/github.inline.svg"
import ChevronDown from "../../assets/icons/chevron-down.inline.svg"

export default () => (
  <StyledHero aria-label='Hero Banner' id='hero'>
    <HeroContent className="hero--content">
      <Container>
        <Heading>Hi, I’m Juan</Heading>
        <Paragraph>I’m a 29-year-old Argentinian-Italian UI Developer living in Buenos Aires. I’m a really curious person, and in spite of having a university degree, I consider myself a self-taught person constantly learning and always looking for new things to improve.</Paragraph>
        <Paragraph>Besides my passion for design and coding, I love and spend a lot of time travelling and taking photos. Feel free to visit my <a href="https://unsplash.com/@juandinella" title="Juan Di Nella's unsplash page" target="_blank" rel="noopener noreferrer"> Unsplash page</a>.</Paragraph>
        <Paragraph>My main focus nowadays is emotional design, web animation, and accessibility.</Paragraph>
        <Paragraph>And don’t forget to stalk me on:</Paragraph>
        <SocialList>
          <li className='tw'><a href='https://www.twitter.com/orugacontenta' target='_blank'  rel='noopener noreferrer' title="Juan Di Nella's Wwitter account"><TwitterIcon /></a></li>
          <li className='fb'><a href='https://www.facebook.com/tuvieja' target='_blank'  rel='noopener noreferrer' title="Juan Di Nella's Facebook account"><FacebookIcon /></a></li>
          <li className='ig'><a href='https://www.instagram.com/juandinella/' target='_blank'  rel='noopener noreferrer' title="Juan Di Nella's Instagram account"><InstagramIcon /></a></li>
          <li className='in'><a href='https://www.linkedin.com/in/juandinella/' target='_blank'  rel='noopener noreferrer' title="Juan Di Nella's Linkedin account"><LinkedinIcon /></a></li>
          <li className='gh'><a href='https://github.com/juandinella' target='_blank'  rel='noopener noreferrer' title="Juan Di Nella's GIthub account"><GithubIcon /></a></li>
        </SocialList>
        <ContactBTN href='mailto:juan.dinella@gmail.com' title='Drop me a line'>Contact me</ContactBTN>
      </Container>
      <Link className='scrollTo' to="works" smooth={true}>
        <span className='visuallyHidden'>Scroll down to see my work</span>
        <ChevronDown/>
      </Link>
    </HeroContent>
  </StyledHero>
)


