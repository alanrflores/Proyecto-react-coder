
const ItemCount = ({counter, setCounter}) => {

    const moreCounter = () => {
        counter < 10 ? setCounter(counter + 1) : setCounter(counter);

    }
    const lessCounter = () => {
        counter > 1 ? setCounter(counter - 1) : setCounter(counter);

    };

    return (
        <>  <div className="container d-flex justify-content-center mt-4">
            <div className="card border-dark mb-3" style={{ width: "20rem" }}>
                <button className="btn btn-outline-success m-3" onClick={moreCounter}>More</button>
                <div className="card-body text-dark">
                    <h1 className="card-title">{counter}</h1>
                </div>
                <button className="btn btn-outline-danger m-3" onClick={lessCounter}>Less</button>
            </div>
        </div>
        </>
    )
}

export default ItemCount;