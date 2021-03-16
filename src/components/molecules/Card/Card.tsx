import React from 'react';
import { CardWrapper } from './Card.styles';

interface Props {
  uniqueKey: string;
  linkHref: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const Card: React.FC<Props> = ({
  uniqueKey,
  linkHref,
  imgSrc,
  imgAlt,
  title,
}) => (
  <CardWrapper key={uniqueKey}>
    <a href={linkHref} title={`See details - ${title}`}>
      <img src={imgSrc} alt={imgAlt} />
      <h4>{title}</h4>
    </a>
  </CardWrapper>
);

export default Card;
