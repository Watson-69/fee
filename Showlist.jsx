import React, { useEffect, useState } from 'react';

function ShowList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const rawData = localStorage.getItem("products");
    const data = rawData ? JSON.parse(rawData) : [];

    if (props.brand) {
      const filtered = data.filter(
        (item) => item.brand?.toLowerCase() === props.brand?.toLowerCase()
      );
      setProducts(filtered);
    } else {
      setProducts(data);
    }
  }, [props.brand]);

  return (
    <section className='fyc'>
      <div className='b1' style={{ padding: "1rem" }}>
        <h3>List of Products: {props.brand}</h3>
        <div className='bg1'>
          <span style={{ width: "3rem" }}>ID</span>
          <span style={{ width: "7rem" }}>Brand</span>
          <span style={{ width: "7rem" }}>Price(Rs.)</span>
        </div>
        {products.map((item) => (
          <div key={item.id}>
            <span style={{ width: "3rem" }}>{item.id}</span>
            <span style={{ width: "7rem" }}>{item.brand}</span>
            <span style={{ width: "7rem" }}>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShowList;