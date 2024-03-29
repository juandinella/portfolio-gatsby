import React from "react"
import { WorkItem, Heading, About, Description, WorkText, Image } from './style';
import Container from "../container"
import Grid from "../grid"
import ArrowRight from "../../assets/icons/arrow-right.inline.svg"

export default ({ title, about, descriptions, url, image, alt }) => (
  <WorkItem className='workOdd' aria-label={title + "work"}>
    <Container>
      <Grid columns="2" gutter="1">
        <div className="grid-item">
          <WorkText>
            <Heading>{title}</Heading>
            <About>{about}</About>
            {descriptions && descriptions.map((p, i) => (<Description key={i}>{p}</Description>))}
            <a href={url} title={title + "'s Website"}>
              <span>Visit the website</span>
              <ArrowRight />
            </a>
          </WorkText>
        </div>
        <div className="grid-item">
          <Image>
            <img src={image} loading='lazy' alt={title + "'s website screenshot"} width="1280" height="950"></img>
          </Image>
        </div>
      </Grid>
    </Container>
  </WorkItem>
)

