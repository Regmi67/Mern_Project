import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fragment from "react";

function StoreList({ baseUrl }) {
  const [shops, setShops] = useState([]);
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setShops(res.data);
        setIsCurrent(true);
      })
      .catch((err) => console.error(err));
  }, [isCurrent]);

  const handleDelete = (id) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => {
        console.log(res.data);
        setIsCurrent(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Store </th>
          <th>Store Number</th>
          <th>Open</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {shops.map((shop) => (
          <tr key={shop._id}>
            <td className="align-middle">
              <Link to={`/stores/` + shop._id}>{shop.storeName}</Link>
            </td>
            <td className="align-middle">{shop.storeNumber}</td>
            <td className="align-middle">{shop.open ? "Yes" : "No"}</td>
            <td className="d-flex gap-2">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(shop._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <hr />

      <Link className="nav-link " to="/stores/new">
        Can't find your store?
      </Link>
    </table>
  );
}

export default StoreList;
