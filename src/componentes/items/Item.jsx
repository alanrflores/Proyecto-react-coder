
const Item = ({ id, title, picture, price, description }) => {

    return (
        <div className="container fst-italic">
            <div className="card" style={{width: "12rem"}}>
                <img src={picture} style={{width: "190px", height:"180px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{title}</h5><hr/>
                        <p className="card-text">{description}<br/>
                        ${price}
                        </p>
                        <a href="#" className="btn btn-outline-success fw-bold">Buy!</a>
                    </div>
            </div>
        </div>
    )
}

export default Item