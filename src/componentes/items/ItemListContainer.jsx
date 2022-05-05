import ItemCount from "./ItemCount"
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  //const [counter, setCounter] = useState(1);
  const [items, setItems] = useState([])

  const date = [
    {
      id: 1,
      title: "Fifa 22",
      stock: 4,
      description: "EA SPORTS™ FIFA 22 brings the game even closer to reality with fundamental in-game advancements and a new season of innovations in all modes.",
      pictureUrl: "https://newlevel.com.ar/wp-content/uploads/2021/09/cover-web-new-level-ps4-2.png",
      price: 4500
    },
    {
      id: 2,
      title: "Nba 2K22",
      stock: 7,
      description: "NBA 2K22 leaves the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against real teams and players.",
      pictureUrl: "https://static.xtralife.com/conversions/PJCN-W8N7340293-fullhd_w1920_h1080_q75-ps5nba2k22-1626334876.webp",
      price: 4500

    },
    {
      id: 3,
      title: "Call Of Duty (Zombies)",
      stock: 8,
      description: "It is a first-person shooter war video game set in the most momentous battles of World War II.",
      pictureUrl: "https://www.callofduty.com/content/dam/atvi/callofduty/blackops4/zombies/hero/zombies-header-logo.png",
      price: 3500

    },
    {
      id: 4,
      title: "Marvel vs Capcom 3",
      stock: 10,
      description: "is a series of fighting games created by Capcom in which characters created by Marvel Comics and Capcom's own characters appear together.",
      pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Marvel_vs_Capcom_logo.png",
      price: 2500

    }]

  const Promises = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(date)
    }, 2000);
  });

  Promises
    .then((res) => setItems(res))
    .catch((err) => console.log(err))

  return (
    <div className="mt-2 text-center">

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