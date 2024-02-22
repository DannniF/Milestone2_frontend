//useState: 
//useEffect: when page loads we need to fetch food
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {
   const [foods, setFoods] = useState([])

   useEffect(() => {
    async function fetchData() {
        const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
        const response = await fetch(url)
        const data  = await response.json()
        console.log(data)
        console.log('yes')
        setFoods(data)
    }
    fetchData()
   },[])


   const display = foods.map(food => {
    return (
        <div key={foods.id}>

            <Link to={`/food/${food._id}`}>{food.name}</Link>
          
        </div>
    )
   })
   return (
    <div>
        {display}
           <Link to={`/food/review`}>Review </Link>
           <Link to={`/login`}>Login</Link>
    </div>
   )
}

export default Home