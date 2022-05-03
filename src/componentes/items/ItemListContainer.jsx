import ItemCount from "./ItemCount"
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [counter, setCounter] = useState(1);
  const [items, setItems] = useState([""])

  const date = [
    {
      id: 1,
      title: "Fifa 22",
      description: "deporte, juego de futbol",
      pictureUrl: "https://newlevel.com.ar/wp-content/uploads/2021/09/cover-web-new-level-ps4-2.png",
      price: 4500
    },
    {
      id: 2,
      title: "Nba 2K22",
      description: "deporte, juego de basquet",
      pictureUrl: "https://static.xtralife.com/conversions/PJCN-W8N7340293-fullhd_w1920_h1080_q75-ps5nba2k22-1626334876.webp",
      price: 4500

    },
    {
      id: 3,
      title: "Call Of Duty (Zombies)",
      description: "juego de armas",
      pictureUrl: "https://www.callofduty.com/content/dam/atvi/callofduty/blackops4/zombies/hero/zombies-header-logo.png",
      price: 3500

    },
    {
      id: 4,
      title: "Ultimate Marvel vs Capcom 3",
      description: "juego de pelea",
      pictureUrl: "https://i.pinimg.com/originals/bd/a9/dc/bda9dc05586aa3def6d6664db8b515b8.png",
      price: 2500

    }]

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(date)
      }, 3000);
    })
    promise
      .then((res) => {
        setItems(res)
      }).then(() => {
        console.log(items)
      }).catch((err) => {
        console.log(err)
      })
    return () => {

    }
  }, [])


  return (
    <div className="container mt-2 text-center">
      <h1>ItemListContainer</h1>
      {/* <ItemCount
        counter={counter}
        setCounter={setCounter}
      /> */}
      
      <ItemList items={items} />
      
    </div>
  )
}

export default ItemListContainer