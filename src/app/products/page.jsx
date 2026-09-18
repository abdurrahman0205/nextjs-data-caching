import React from 'react';

const ProductPage = async () => {
  const res = await fetch('http://localhost:5001/products')
  const data = await res.json();
    console.log('product', data);
  return (
    <div>
      this is product, product:{data.length}
    </div>
  );
};

export default ProductPage;