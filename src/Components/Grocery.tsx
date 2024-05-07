import { useEffect, useState } from "react"
import "../SCSS/index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Foods } from "./Food.js";
import image10002 from '../image/10002.webp';
import image10004 from '../image/10004.webp';





function Grocery() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            console.log('yes')
            setSearchTerm(data)
        }
        fetchData()
    }, [])


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const url = `${process.env.REACT_APP_BACKEND_URL}/foods/searchfoods/steak`
        const url = `${process.env.REACT_APP_BACKEND_URL}/foods/searchfoods/${searchTerm}`
        const response = await fetch(url, {
            method: 'GET',
        })

        const data = await response.json();
        console.log(data)
        setSearchResults(data)
    }





    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} placeholder="Search Food" />
                    <input type="submit" />
                </form>
            </div>
            <div>
                {searchResults.map(food => ( // Render the search results
                    <div className="form2" key={food._id}>
                        <img  src={food.profilePicture} className="card-img" />
                        <Link to={`/foods/${food._id}`}>{food.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )


}


export default Grocery;