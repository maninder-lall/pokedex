import React from "react"
//https://pokeapi.co/api/v2/pokemon/charmeleon


export default function Card(props) {
    const currentPoke = props.data
    // const currentPokemonName = (currentPoke.Name).toLowerCase()

    // const [apiData, setApiData] = React.useState("")

    // React.useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/" + currentPokemonName)
    //         .then(res => res.json())
    //         .then(data => {console.log(data)})
    // }, [currentPokemonName])

    // console.log('before')
    // console.log(apiData)
    // console.log("after")

    function cardDisplay(){
        props.showCard(currentPoke)
    }
    

    return (
        <div onClick={cardDisplay} className="card">
            <h2 className="card--title">{currentPoke.Number + " " + currentPoke.Name}</h2>
            <img className="card--image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPoke.Number}.png`} />
            <h5 className="card--text">Type1: {currentPoke.Type1}</h5>
            <h5 className="card--text">Type2: {currentPoke.Type2}</h5>
            <h5 className="card--text">Height (m): {currentPoke["Height(m)"]}</h5>
            <h5 className="card--text">Weight (kg): {currentPoke["Weight(kg)"]}</h5>
            <h5 className="card--text">Capture Rate: {currentPoke["Capt_Rate"]}</h5>
        </div>
    )
}