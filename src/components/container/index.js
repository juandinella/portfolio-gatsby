import React from 'react'
import { Container } from './style';

export default ({ className, children }) => (
  <Container className={className}>{children}</Container>
)
