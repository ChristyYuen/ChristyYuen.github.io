import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const isExternal = props.path.startsWith('http');

  return (
    <>
      <li className='cards__item'>
        {isExternal ? (
          <a className='cards__item__link' href={props.path} target="_blank" rel="noopener noreferrer">
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='GitHub Images'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </a>
        ) : (
          <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='GitHub Images'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        )}
      </li>
    </>
  );
}

export default CardItem;