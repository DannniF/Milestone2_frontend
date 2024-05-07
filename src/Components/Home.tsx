//useState: 
//useEffect: when page loads we need to fetch food
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from './Banner.tsx';

function Home() {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/Foods/all`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            console.log('yes')
            setFoods(data)
        }
        fetchData()
    }, [])



    return (
        <div>
            <Banner/>
        </div>
    )
}

export default Home;