import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  });

  return (
    <main>
      <div className="container py-5">
        <h2 className="mb-4">I nostri prodotti</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top h-30 W-20 p-3"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">
                    Valutazione degli utenti:⭐{product.rating.rate}
                  </p>
                  <p className="card-text">
                    Numero di voti:
                    {product.rating.count}
                  </p>
                  <p className="fw-bold text-primary">{product.price} €</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
