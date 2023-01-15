import React from 'react'
import Products from './Products'

const ProductFeed = () => {
  return (
    <div
    className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3
  xl:grid-cols-4 mx-auto m-2 gap-2 px-2 md:px-4'
  >
    {productData.map(({ id, title, price, description, category, image }) => (
      <Products
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
      />
    ))}
  </div>
  )
}

export default ProductFeed