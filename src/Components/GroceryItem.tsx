import { useEffect, useState } from "react"
import Grocery from "./Grocery.tsx"
import Food from "./Food.tsx"

function GroceryItem(Foods){
    const [view,setView] = useState(false)

    const simpleStyle ={
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundimage': 'src\image\Foddie Central.png',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return(
            <div style={simpleStyle}>
                <h3>{Foods.item}</h3>
                <h4>{Foods.item}</h4>
            </div>
        )
    }

    const detailView = () => {
        return(
            <div style={detailStyle}>
                <h2>{Foods.item}</h2>
                <h3>{Foods.item}</h3>
            </div>
        )
    }

    return (
        <div onClick ={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>GroceryItem</p>
        </div>
    )
}

export default GroceryItem