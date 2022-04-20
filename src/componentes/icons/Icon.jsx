

const Icon = () => {
    const icon = "https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png"

  return (

    <div className="container">
        <button className="btn btn-outline-link m-0 p-1">
        <img src={icon} style={{ width:"2em"  }} />
      </button>
    </div>
  )
}

export default Icon