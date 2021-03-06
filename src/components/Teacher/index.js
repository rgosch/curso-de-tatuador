import React from "react"

import { Section } from "../Section"
import { teacher } from "../../utils/texts"
import {
  ProfilePhoto,
  Name,
  Description,
  Container,
  ContentSide,
} from "./style"

import background from "../../images/Professor background.webp"
import profile from "../../images/Professor perfil.webp"

export const Teacher = () => (
  <Section title={teacher.title} backgroundImage={background}>
    <Container>
      <ProfilePhoto src={profile} alt={teacher.imageAlt} />
      <ContentSide>
        <Name>{teacher.name}</Name>
        <Description>{teacher.description}</Description>
      </ContentSide>
    </Container>
  </Section>
)
