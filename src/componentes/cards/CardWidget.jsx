import { useEffect, useState } from "react";

const CardWidget = ({ Icon, color, size }) => {
  const [num, setNum] = useState(0);
  let cartStorage = localStorage.getItem("cart");

  useEffect(() => {
    if (cartStorage) {
      let cartParse = JSON.parse(cartStorage);
      setNum(cartParse.length);
    }
  }, []);

  return (
    <div>
      <Icon style={{ color: color, fontSize: size }} />
      <span className="text-danger border-0 fw-bold pe-2"> {num} </span>
    </div>
  );
};

export default CardWidget;
