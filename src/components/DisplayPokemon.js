import React from "react"

export default function DisplayPokemon(props) {
    const currentPoke = props.data
    console.log(currentPoke)


    return (
        <center className="outerContainer">
            <h2 className="form--title">{props.data.Name}</h2>
            <div>
                <div className="display">
                    <div className="spriteBox">
                        <h5>Front Sprite</h5>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPoke.Number}.png`} />
                    </div>

                    <div className="spriteBox">
                        <h5>Back Sprite</h5>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${currentPoke.Number}.png`} />
                    </div>

                    <div className="spriteBox">
                        <h5>Front Shiny Sprite</h5>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${currentPoke.Number}.png`} />
                    </div>

                    <div className="spriteBox">
                        <h5>Back Shiny Sprite</h5>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${currentPoke.Number}.png`} />
                    </div>
                </div>

                <h3 className="stats--title">Statistics</h3>
                <div className="stats">
                    <div className="stats--container">
                        <div className="stats--container--col"> 
                            <p className="stats--container--entity"><strong>Pokemon: </strong>{currentPoke.Name}</p>
                            <p className="stats--container--entity"><strong>National Dex Number: </strong>{currentPoke.Number}</p>
                            <p className="stats--container--entity"><strong>Number of Types:</strong> {currentPoke.Types}</p>
                            <p className="stats--container--entity"><strong>Type 1: </strong>{currentPoke.Type1}</p>
                            <p className="stats--container--entity"><strong>Type 2: </strong>{currentPoke.Type2}</p>
                            <p className="stats--container--entity"><strong>Height(m): </strong>{currentPoke["Height(m)"]}</p>
                            <p className="stats--container--entity"><strong>Weight(kg): </strong>{currentPoke["Weight(kg)"]}</p>
                            <p className="stats--container--entity"><strong>Male Encounter Percentage: </strong>{currentPoke.Male_Pct}</p>
                            <p className="stats--container--entity"><strong>Female Encounter Percentage: </strong>{currentPoke.Female_Pct}</p>
                        </div>
                        <div className="stats--container--col">
                            <p className="stats--container--entity"><strong>Capture Rate: </strong>{currentPoke.Capt_Rate}</p>
                            <p className="stats--container--entity"><strong>Experience Points Required: </strong>{currentPoke.Exp_Points}</p>
                            <p className="stats--container--entity"><strong>Experience Speed: </strong>{currentPoke.Exp_Speed}</p>
                            <p className="stats--container--entity"><strong>Base Total Level: </strong>{currentPoke.Base_Total}</p>
                            <p className="stats--container--entity"><strong>Hitpoints Stat: </strong>{currentPoke.HP}</p>
                            <p className="stats--container--entity"><strong>Attack Stat: </strong>{currentPoke.Attack}</p>
                            <p className="stats--container--entity"><strong>Defense Stat: </strong>{currentPoke.Defense}</p>
                            <p className="stats--container--entity"><strong>Special Stat: </strong>{currentPoke.Special}</p>
                            <p className="stats--container--entity"><strong>Speed Stat: </strong>{currentPoke.Speed}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <button onClick={props.Close}>Close</button>
        </center>
        
    )
}