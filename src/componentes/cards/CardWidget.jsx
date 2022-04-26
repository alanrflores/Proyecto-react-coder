
const CardWidget = () => {

    const cardW =
        "https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png"

    return (
        <div className="card bg-dark" style={{ width: "3em" }}>
            <img src={cardW} style={{ width: "2em" }} className="card-img-top ms-2" alt="..." />

        </div>
    )
}

export default CardWidget;