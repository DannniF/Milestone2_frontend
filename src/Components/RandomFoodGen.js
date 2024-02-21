import {useState, useEffect} from "react"
import{useNavigate} from "react-router-dom"

function RandomFood(){
    const INITIAL_STATE = {
        rating: "",
        comment: "",
    }

    const navigate = useNavigate()

    const [newReview, setNewReview] = useState(INITIAL_STATE);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/review/all`
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
          

            const url = `${process.env.REACT_APP_BACKEND_URL}/review`
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(newReview)
            })
            if(response.status !== 201) console.log('ERROR:') // add error handling
            // navigate('/food/review') was replaced due to not refreshing the page when creating a new review. 
            // reloads our page on submit : answer: https://stackoverflow.com/questions/18920651/how-can-i-refresh-a-form-page-after-the-form-submits-to-blank
            window.location.reload('/food/reivew')

        }
 
   

    return(
        <div>
            <h3>Give us a Review</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={reviews.rating} name="rating" placeholder="rating" type="number" min={0} max={5}/>
                <input onChange={handleChange} value={reviews.comment} name="comment" placeholder="comment" type="textArea"/>
                <input type="submit" />
                
            </form>
            <div>
                {/* index was added cause for some reason it removed the id error on the console log  */}
                <h3>Reviews</h3>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <h4>Name: </h4>
                        <h4>Rating: {review.rating}</h4>
                        <p>Comment: {review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RandomFood   