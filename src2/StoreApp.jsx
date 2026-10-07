import React, { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";

function StoreApp() {
    const [id, setId] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("products");
        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    const handleAdd = (e) => {
        e.preventDefault();
        const newProduct = {
            id: id,
            category: category.trim(),
            brand: brand.trim(),
            price: price
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        setId("");
        setCategory("");
        setBrand("");
        setPrice("");
    };

    const handleDelete = (del_id) => {
        const updatedProducts = products.filter((product) => product.id !== del_id);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    return (
        <section className="hf bg20 p3">
            <section className="w25 b1 p1">
                <h3>Add Product</h3>
                <form onSubmit={handleAdd} className="fy w15">
                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn2 bg40 mt1">
                        Add
                    </button>
                </form>
            </section>
                <br />
                <section className="w25 b1 p1">
                    <h3> List of Products ({products.length})</h3>
                    <br/>
                    <ul style={{paddingLeft:"0",listStyleType:"none"}}>(plist)</ul>
                </section>
        </section>
    );
}

export default StoreApp;