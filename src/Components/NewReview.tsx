import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardImg, CardTitle, Button, CardText } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SCSS/index.css'




function NewReview() {
    const INITIAL_STATE = {
        rating: "",
        comment: "",
    }

    const navigate = useNavigate()

    const [newReview, setNewReview] = useState(INITIAL_STATE);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/reviews/all`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            console.log('reviews retrevied')
            setReviews(data)
        }
        fetchData()
    }, [])

    //notes: setAnimal(e.target.value) which seems to be the go to with handleChange will not work in this situation becuase it will override our inital state and whats in the form
    const handleChange = (e) => {
        setNewReview({
            ...newReview,
            //this targets the name in our input, it does this because we are calling this function "handleChange" on linke 44 in our input. 
            //This targets our name in our inputs and [updates the correct values]
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //creating our animal to connect to db
        newReview.age = Number(newReview.age)

        const url = `${process.env.REACT_APP_BACKEND_URL}/reviews`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        if (response.status !== 201) console.log('ERROR:') // add error handling
        // navigate('/food/review') was replaced due to not refreshing the page when creating a new review. 
        // reloads our page on submit : answer: https://stackoverflow.com/questions/18920651/how-can-i-refresh-a-form-page-after-the-form-submits-to-blank
        window.location.reload('/food/reivew')

    }



    return (
        <div >
            <h3 className="center-form-header">Leave us a Review</h3>
            <form onSubmit={handleSubmit} className="center-form" >
                <input className="form-2" onChange={handleChange} value={reviews.name} name="name" placeholder="name" />
                <input className="form-1" onChange={handleChange} value={reviews.rating} name="rating" placeholder="rating" type="number" min={0} max={5} />
                <input className="form-2" onChange={handleChange} value={reviews.comment} name="comment" placeholder="comment" type="textArea" />

                <input className="form-1" Button="warning" type="submit" />

            </form>
            <div >
                {/* index was added cause for some reason it removed the id error on the console log  */}
                <h3 className="center-form">Reviews</h3>
                {reviews.map((review, index) => (
                    <div key={index} className="card-div" >
                        <Card className="custom-card" >
                            <CardTitle> <h4 className="card-headers">Name:</h4> <p className="card-text-size">{review.name} </p></CardTitle>
                            <CardText><h4 className="card-headers">Rating: </h4> <p className="card-text-size">{review.rating}</p></CardText>
                            <h4 className="card-headers">Comment:</h4 > <p className="card-text-size">{review.comment}</p>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewReview