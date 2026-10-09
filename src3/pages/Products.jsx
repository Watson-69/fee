import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = localStorage.getItem("products");
        const arrayObject = getData ? JSON.parse(getData) : [];
        setProducts(arrayObject);
    }, []);

    const categories = products.map((p) => p.category);
    const uniqueCategories = [...new Set(categories)];

    const cLinks = uniqueCategories.map((c) => (
        <div key={c} className='mb1'>
            <Link to={c}>{c}</Link>
        </div>
    ));

    return (
        <div className='h95 fx'>
            <aside className='bg52 w10 p3'>
                <h3 className='mb3'>Categories</h3>
                {cLinks}
            </aside>
            <main className='p2' style={{ flex: '1' }}>
                <Outlet />
            </main>
        </div>
    );
}

export function CategoryProducts() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = localStorage.getItem("products");
        const arrayObject = getData ? JSON.parse(getData) : [];
        setProducts(arrayObject);
    }, []);

    const filteredProducts = products.filter((p) => p.category === category);

    const cards = filteredProducts.map((p, index) => (
        <div key={p.id || index} className='p2 m1 border'>
            <h4>{p.name || p.title}</h4>
            <p>{p.price}</p>
        </div>
    ));

    return (
        <div>
            <h3>Product Category : {category}</h3>
            <div className='fx mt2' style={{ flexWrap: "wrap" }}>
                {cards}
            </div>
        </div>
    );
}