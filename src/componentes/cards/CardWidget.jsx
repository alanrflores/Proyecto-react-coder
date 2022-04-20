
const CardWidget = () => {

    const cardW =
        "https://static7.depositphotos.com/1007989/773/i/950/depositphotos_7733948-stock-photo-shopping-cart.jpg"

    return (
        <div className="card" style={{ width: "12em" }}>
            <img src={cardW} style={{ width: "5em" }} className="card-img-top ms-4" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default CardWidget;