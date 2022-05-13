import { useContext } from "react"
import { CartContext } from "../../context/CartContextProvider"

const CardWidget = ({ Icon, color, size }) => {
  const {cart} = useContext(CartContext);

  return (
    <div>
      <Icon style={{ color: color, fontSize: size }} />
      <span className="text-danger border-0 fw-bold pe-2">{cart.length}</span>
    </div>
  );
};

export default CardWidget;
