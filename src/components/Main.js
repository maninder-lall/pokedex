import React from "react"
import Card from "../components/Card.js"

//https://pokeapi.co/api/v2/pokemon/charmeleon



export default function Main(props) {
    const data = props.data
    const query = props.query

    const newData = data.filter(search =>{
        if (query === "") {
            //if query is empty
            return search;
        }else if (search.Name.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return search;
          }
    })

    function handleDisplayCard(a){
        props.cardShow(a)
    }

    const cards = newData.map((poke, index) => <Card 
        key = {poke.Number}
        data = {poke}
        showCard = {handleDisplayCard}
      />)
    return (
        <header className="main">
            {cards}
        </header>
    )
}