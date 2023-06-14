import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function StoreDetail({ baseUrl }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setShop(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/stores");
      })
      .catch((err) => console.log(err));
  };
  const handleFavorite = () => {
    setIsFavorite(true);
  };
  return (
    shop && (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{shop.storeName}</h3>
          <h4 className="card-subtitle mb-3">{shop.storeNumber}</h4>

          <p className="text-card">{shop.open}</p>
        </div>
        <div className="card-footer d-flex justify-content-end gap-2">
          <Link className="btn btn-sm btn-warning " to={`/stores/${id}/edit`}>
            Edit Store Details
          </Link>
          <a href="/stores/">
            <button className="btn btn-sm btn-warning ">go back home</button>
          </a>
        </div>
      </div>
    )
  );
}

export default StoreDetail;
