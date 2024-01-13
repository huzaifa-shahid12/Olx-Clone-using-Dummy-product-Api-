import { useState, useEffect } from "react";
import Category from "../reusable/category/Category";
import Card from "../screen/Card/Card";
import { useNavigate } from "react-router-dom";
import Slider from "../reusable/slider/Slider";

// import Carddetails from "../screen/CardDetails/Carddetails";

const Dashboard = () => {
   
  const navigate = useNavigate();
  const [data, setData] = useState({ products: [] });
  // const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log("Error fetching data: ", error));
  };

  if (!data.products.length) {
    return <div>LOADING.....</div>;
  }

  return (
    <div className="Dashboard">
      <div className="Dashboard-content">
         <Slider />
        <Category />
        <div className="container-fluid">
          <div className="row">
            {data.products.map((item) => {
              const { thumbnail, title, description, price, id } = item;
              return (
                <Card
                  id={id}
                  thumbnail={thumbnail}
                  title={title}
                  description={description}
                  price={price}
                  // onClick={onClick} // Commented out or remove this line
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
