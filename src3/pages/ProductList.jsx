import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductList() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const stringData = localStorage.getItem("products");
        const arrayObject = stringData ? JSON.parse(stringData) : [];
        setProducts(arrayObject);
    }, []);

    const plist = products.filter((p) => p.category === category);

    const cards = plist.map((p) => (
        <div key={p.id} className="card2 p2 fx sh2">
            <div className="w50">Image</div>
            <div className="w50 fy jsb">
                id :{p.id}
                <br />{p.brand}
                <br />Price: {p.price}/-
                <br /> 
                <button className="bg50">
                    Add to Cart
                </button>
            </div>
        </div>
    ));

    return (
        <div className="fx" style={{ flexWrap: "wrap", gap: "1rem" }}>
            {cards}
        </div>
    );
}