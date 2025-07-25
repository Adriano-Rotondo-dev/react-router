import { useState, useEffect } from "react";
//*importo axios in pagina
import axios from "axios";
//*importo useParams da react-router-dom per associarlo all'id dell'oggetto dell'array
import { useParams } from "react-router-dom";

export default function SingleProductPage() {
  const { id } = useParams();
  //*dichiaro il product, il setter e lo useState su un array vuoto
  const [product, setProduct] = useState([]);

  //*axios effettua una AJAX request sul singolo prodotto tramite l'id
  //*restituisce in json
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
    //! ricorda la dipendenza [] o genero loop infinito di fetch request
  }, []);
  return (
    <>
      {/* copia della card singola di product - soluzione temporanea */}
      <div className="container">
        <div className="col col-sm-12 p-3">
          <div className="card d-flex flex-row w-100">
            <img
              src={product.image}
              className="img-fluid p-5 product-img"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.category}</p>
              {/* rate e count risultano undefined poiché rating è un array annidato
              optional chaining ?. per inserirli successivamente al rendering della pagina */}
              <p className="card-text">
                Valutazione degli utenti:⭐{product.rating?.rate}
              </p>
              <p className="card-text">
                Numero di voti:
                {product.rating?.count}
              </p>
              <p className="fw-bold text-primary">{product.price} €</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
