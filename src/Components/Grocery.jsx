import { useEffect, useState } from "react"
import "./Grocery.css";
import { useNavigate } from "react-router-dom";

function Grocery() {
    const[searchTerm, setSearchTerm] = useState('')


          useEffect(() => {
            async function fetchData() {
                const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
                const response = await fetch(url)
                const data  = await response.json()
                console.log(data)
                console.log('yes')
                setSearchTerm(data)
            }
            fetchData()
           },[])
           
           //notes: setAnimal(e.target.value) which seems to be the go to with handleChange will not work in this situation becuase it will override our inital state and whats in the form
    const handleChange = (e) => {
        setSearchTerm({
            ...searchTerm,
            //this targets the name in our input, it does this because we are calling this function "handleChange" on linke 44 in our input. 
            //This targets our name in our inputs and [updates the correct values]
            [e.target.name]: e.target.value
        })
}

    const handleSubmit = async (e) => {
        e.preventDefault()
        //creating our animal to connect to db

        const url = `${process.env.REACT_APP_BACKEND_URL}/searchfoods/:name`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
        if(response.status !== 201) console.log('ERROR:') // add error handling
        // navigate('/food/review') was replaced due to not refreshing the page when creating a new review. 
        // reloads our page on submit : answer: https://stackoverflow.com/questions/18920651/how-can-i-refresh-a-form-page-after-the-form-submits-to-blank
        window.location.reload('/food/reivew')

    }
           
   

    return(
        <div className= "form">
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input onChange = {(e) => setSearchTerm(e.target.value)} placeholder="Search Food"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Price"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Description"/>
            <input type="submit"/>
            <input onChange ={(e) => setSearchTerm(e.target.value)} placeholder="Search Rating"/>
            <input type="submit"/>
        </form>
        </div>
    
    )

}


export default Grocery;

