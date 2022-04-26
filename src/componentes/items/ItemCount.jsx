import { useState } from "react";
const ItemCount = () => {

    const [contador, setContador] = useState(1);

    const aumentarContador = () => {
        contador < 10 ? setContador(contador + 1) : setContador(contador);

    }
    const restarContador = () => {
        contador > 1 ? setContador(contador - 1) : setContador(contador);

    };


    return (
        <>  <div className="container d-flex justify-content-center mt-4">
            <div className="card border-dark mb-3" style={{ width: "20rem" }}>
                <button className="btn btn-outline-success m-3" onClick={aumentarContador}>Aumentar</button>
                <div className="card-body text-dark">
                    <h1 className="card-title">{contador}</h1>
                </div>
                <button className="btn btn-outline-danger m-3" onClick={restarContador}>Restar</button>
            </div>
        </div>
        </>
    )
}

export default ItemCount