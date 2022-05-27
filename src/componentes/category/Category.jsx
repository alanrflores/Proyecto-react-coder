import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../items/ItemListContainer'

const Category = () => {

    const {category} = useParams()

  return (
    <div>
      <ItemListContainer filter={category}/>
    </div>
  )
}

export default Category