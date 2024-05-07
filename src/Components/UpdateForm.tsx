import { useState, useEffect } from "react"
import { useParams, useNavigate, Link} from "react-router-dom"
import { Card,CardBody,CardSubtitle,CardImg,CardTitle, Button, CardText} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SCSS/index.css'



function UpdateForm() {
    const [foods, setFoods] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/foods/${id}`
            const response = await fetch(url)
            const data = await response.json()
            setFoods(data)
         
            console.log(data)
        }
        fetchData()
    }, [id])

    const display = foods && (
        <h2>Name: {foods.name}</h2>,
    
        
            <Card className="custom-card">
            <img  src={foods.profilePicture} className="card-img" />
            <CardTitle><h4 className="card-headers">Name:</h4> <h4>{foods.name}</h4></CardTitle>
            <CardText><h4 className="card-headers">type: </h4> <p className="card-text-size">{foods.type}</p></CardText>
            <CardText><h4 className="card-headers">price: </h4> <p className="card-text-size">{foods.price}</p></CardText>
            <CardText><h4 className="card-headers">description: </h4> <p className="card-text-size">{foods.description}</p></CardText>
            <CardText><h4 className="card-headers">section: </h4> <p className="card-text-size">{foods.section}</p></CardText>
        </Card>
    )




    return(
        <div>
            {display}

        </div>
 
    )
   
}

export default UpdateForm