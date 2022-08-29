import React from "react"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import fileData from "./FirstGenPokemon.json"
import Form from "./components/AddPokemon.js"
import DisplayPokemon from "./components/DisplayPokemon.js"


export default function App() {
  const dataCopy = JSON.parse(JSON.stringify(fileData))
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAdd, setShowAdd] = React.useState(false)
  const [useData, setUseData] = React.useState(dataCopy)
  const [showPokemon, setShowPokemon] = React.useState(false)
  const [currentPokemon, setCurrentPokemon] = React.useState("")

  let savedData = JSON.parse(localStorage.getItem('myData'))
  if ((savedData !=null) && savedData.length > useData.length){
    setUseData(savedData)
  }

  function searchHandle(event){
    setSearchQuery(event.target.value)
  }

  function handleAddition(a){
    setShowAdd(!showAdd)
  }

  function handleData(sub){
    console.log(sub)
    let newData = Object.assign(useData,
      {
        [useData.length]:{
          Number: parseInt(sub.Number),
          Name: sub.Name,
          Types: sub.Types,
          Type1: sub.Type1,
          Type2: sub.Type2,
          ["Height(m)"]: sub["Height(m)"],
          ["Weight(kg)"]: sub["Weight(kg)"],
          Male_Pct: sub.Male_Pct,
          Female_Pct: sub.Female_Pct,
          Capt_Rate: sub.Capt_Rate,
          Exp_Points: sub.Exp_Points,
          Exp_Speed: sub.Exp_Speed,
          Base_Total: sub.Base_Total,
          HP: sub.HP,
          Attack: sub.Attack,
          Defense: sub.Defense,
          Special: sub.Special,
          Speed: sub.Speed,
        }
      })
      let sortedD = newData.sort((a,b)=>a.Number - b.Number);
      let d = localStorage.setItem('myData', JSON.stringify(newData))

      savedData = JSON.parse(localStorage.getItem('myData'))
      setUseData(savedData)
  }
  
  function reset(){
    localStorage.removeItem("myData");
    savedData= dataCopy
    setUseData(savedData)
  }
  
  function cardEnabler(obj){
    setShowPokemon(true)
    setCurrentPokemon(obj)
  }

  function handleDisplay(){
    setShowPokemon(false)
  }




  return (
      <div>
        <React.StrictMode>
          <div className="fixed-pos">
            <Header query={searchQuery} searchHandle={searchHandle} submission = {handleAddition} reset={reset}/>
          </div>
          
          <div className="scroll">
            <Main data={useData} query={searchQuery} cardShow = {cardEnabler}/>
          </div>
          

          {showAdd && <div className={showAdd ? "AddPopUp":"noAdd"}>
            <Form Close={handleAddition} formDat = {handleData}/>
          </div>}

          {showPokemon && <div className={showPokemon ? "AddPopUp":"noAdd"}>
            <DisplayPokemon Close={handleDisplay} data = {currentPokemon}/>
          </div>}

        <div className="footer">
          <h5 className="footer--name">Maninder Lall</h5>
        </div>

        </React.StrictMode>
        
      </div>
  )
}
