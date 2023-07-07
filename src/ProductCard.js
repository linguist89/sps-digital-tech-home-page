import { Card } from 'flowbite-react';
import './Buttons.css';

function ProductCard({ imgAlt, imgSrc, title, description}) {
  return (
    <Card
      imgAlt={imgAlt}
      imgSrc={imgSrc}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
      </p>
    <button className="solid-card-button">Visit Site</button>
    </Card>
  )
}

export default ProductCard;