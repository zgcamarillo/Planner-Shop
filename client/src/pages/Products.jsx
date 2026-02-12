import { useEffect, useState } from "react"; //importing hooks

export default function Products() { //defining product page component
    const [products, setProducts] = useState([]);
    const [selectedType, setSelectedType] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect (() => {
        fetch("http://localhost:5000/api/products")
            .then( res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <h1>Planners</h1>
            <p>Total: {products.length}</p>

            <div>
                <select onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="All">All Types</option>
                    <option value="Academic">Academic</option>
                    <option value="Budget">Budget</option>
                    <option value="Undated">Undated</option>
                    <option value="Life Planning">Life Planning</option>
                    <option value="For Teachers">For Teachers</option>
                </select>

                <input type="number" placeholder="Max Price" onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
            
            <div>
                {products
                    .filter((p) => {
                        const matchesType =
                            selectedType === "All" || (Array.isArray(p.type) && p.type.includes(selectedType));

                        const matchesPrice = 
                            !maxPrice || p.price <= Number(maxPrice);

                        return matchesType && matchesPrice; 
                    })
                    .map(p => (
                    <div key={p._id}>
                        <h3>{p.title}</h3>
                        <p>{p.price}</p>
                    </div>
                ))}
            </div>
        </>
    )


}