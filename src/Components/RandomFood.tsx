import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardImg, CardTitle, Button, CardText } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SCSS/index.css'
import { random } from "node-forge";
import UpdateForm from './UpdateForm'



function RandomFood() {
    const navigate = useNavigate()
    const [randomfood, setrandomfood] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/foods/all`
            const response = await fetch(url)
            const data = await response.json()
            if (data && data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.length);
                setrandomfood(data[randomIndex]); // Select a random review
            }
        }
        fetchData();
    }, [])

    async function DeleteFood() {
        try {
            const url = `${process.env.REACT_APP_BACKEND_URL}/foods/${randomfood._id}`
            const response = await fetch(url, {
                method: 'DELETE',
                headers: { "content-type": "application/json" },

            });
            if (response.ok) {
                console.log('fooddeleted')
            }
        } catch (error) {
            console.error("error deleting food", error)

        }

    }

    async function UpdateLike() {
        console.log('Food Liked +1')
        const newLikeCount = (randomfood.likes || 0) + 1;
        const url = `${process.env.REACT_APP_BACKEND_URL}/foods/${randomfood._id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ likes: newLikeCount }),
        });

    }

    async function handleClick() {
        UpdateLike();
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    async function handleClick2() {
        DeleteFood();
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    return (
        <div >
            <h3 className="center-form">Food Picker 3000</h3>
            {randomfood && ( // Check if a review is selected
                <div >
                    <Card className="custom-card">
                        <div>
                            <img src={randomfood.profilePicture} className="card-img" />
                            <CardTitle className="side-by-side"><h4 className="card-headers">Name:</h4> <p className="card-text-size">{randomfood.name}</p></CardTitle>
                            <CardText className="side-by-side"><h4 className="card-headers">type: </h4> <p className="card-text-size">{randomfood.type}</p></CardText>
                            <CardText className="side-by-side"><h4 className="card-headers">price: </h4> <p className="card-text-size">{randomfood.price}</p></CardText>
                            <CardText className="side-by-side"><h4 className="card-headers">description: </h4> <p className="card-text-size">{randomfood.description}</p></CardText>
                            <CardText className="side-by-side"><h4 className="card-headers">Likes: </h4> <p className="card-text-size">{randomfood.likes}</p></CardText>
                        </div>
                        <Button className="btn-danger col-3 center-form2" onClick={handleClick2} navigate="/food/random">Destroy </Button>
                        <Button className="btn-warning col-3 center-form2" onClick={handleClick}> Like  </Button>
                        <Button className="col-3 center-form2" > Add to Cart</Button>

                    </Card>
                </div>
            )}
        </div>

    );
}


export default RandomFood