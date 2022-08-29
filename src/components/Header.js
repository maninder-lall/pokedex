import React from "react"

export default function Header(props) {
    return (
        <header className="header">
            <div className="header--title">
                <h2 className="header--titleText">Pokedex</h2>
            </div>
            <div className="searchSection">
                <input className="searchBar"placeholder="Search Pokemon by name" onChange={props.searchHandle} />
            </div>

            <div className="header--right">
                <button className="button-10" role="button" onClick={props.submission}>Add Pokemon</button>
                <button className="button-10" role="button" onClick={props.reset}>Reset Pokedex</button>
            </div>
            
        </header>
    )
}