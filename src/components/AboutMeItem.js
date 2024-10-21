import React from 'react';
import { Link } from 'react-router-dom';

function AboutMeItem(props) {
  return (
    <>
    <li className='aboutme__item__link'>
        <li className='aboutme__item'>
            <figure className='aboutme__item__pic-wrap' data-category={props.label}>
                <img
                    className='aboutme__item__img'
                    alt='About Me'
                    src={props.src}
                />
            </figure>
            <div className='aboutme__item__info'>
                <h5 className='aboutme__item__text'>{props.title}</h5>
                <h6 className='aboutme__item__text'>{props.subtitle}</h6>
            </div>
        </li>
    </li>
      
    </>
  );
}

export default AboutMeItem;