const CardWidget = ({ Icon, color, size }) => {
  return (
    <div>
      <Icon style={{ color: color, fontSize: size }} />
    </div>
  );
};

export default CardWidget;
