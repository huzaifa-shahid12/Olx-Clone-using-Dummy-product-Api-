// // Card.js
// import React from "react";
// // import { Link } from "react-router-dom";
// import "./Card.css";
// import { useNavigate } from "react-router-dom";


// function Card(props) {
//     const navigate = useNavigate();

//     const { price, title, description, thumbnail , onClick} = props;

//   // const handleClick = (e) => {
//   //   e.stopPropagation();
//   //   onClick();
//   // };

//   return (
//     <div className="Card col-md-3 mb-4">
//       {/* <Link to="/Detailspage" className="card-link"> */}
//       <div className="card" onClick={() => navigate(`/card/${id}`)}>
//         <img src={thumbnail} className="card-img-top" alt="Card Thumbnail" />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{description}</p>
//           <h6 className="card-price">Price: {price}</h6>
//         </div>
//       </div>
//       {/* </Link> */}
//     </div>
//   );
// }

// export default Card;
// Card.js
import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();

    const { id, price, title, description, thumbnail } = props;

    return (
        <div className="Card col-md-3 mb-4">
            <div className="card" onClick={() => navigate(`/Carddetails/${id}`)}>
                <img src={thumbnail} className="card-img-top" alt="Card Thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="card-price">Price: {price}</h6>
                </div>
            </div>
        </div>
    );
}

export default Card;
