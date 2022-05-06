
const ItemCount = ({ counter, setCounter, stock }) => {

    const moreCounter = () => {
        counter < 10 ? setCounter(counter + 1) : setCounter(counter);

    }
    const lessCounter = () => {
        counter > 1 ? setCounter(counter - 1) : setCounter(counter);

    };

    return (
        <>  
            <div className="card border" style={{ width: "30rem" }}>
                <div className="card-body text-dark">
                    <h1
                        className="card-title text-center fst-italic fs-6 text">
                        {counter}
                    </h1>
                    <p
                        className="text-center fw-bold fst-italic mt-4">
                        Stock: {stock}
                    </p>
                </div>
                <button
                    className="btn btn-outline-success fst-italic border-0 m-1"
                    onClick={moreCounter}>
                    More
                </button>
                <button
                    className="btn btn-outline-danger fst-italic border-0 m-1"
                    onClick={lessCounter}>
                    Less
                </button>
            </div>
        </>
    )
}

export default ItemCount;