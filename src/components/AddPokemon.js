import React from "react"

export default function Header(props) {

    const [formData, setFormData] = React.useState({
        Number: "",
        Name: "",
        Types: "",
        Type1: "",
        Type2: "",
        ["Height(m)"]: "",
        ["Weight(kg)"]: "",
        Male_Pct: "",
        Female_Pct: "",
        Capt_Rate: "",
        Exp_Points: "",
        Exp_Speed: "",
        Base_Total: "",
        HP: "",
        Attack: "",
        Defense: "",
        Special: "",
        Speed: "",
    })

    

    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        props.formDat(formData)
        formData.Number = ""
        formData.Name= ""
        formData.Types= ""
        formData.Type1= ""
        formData.Type2= ""
        formData["Height(m)"]= ""
        formData["Weight(kg)"]= ""
        formData.Male_Pct= ""
        formData.Female_Pct= ""
        formData.Capt_Rate= ""
        formData.Exp_Points= ""
        formData.Exp_Speed= ""
        formData.Base_Total= ""
        formData.HP= ""
        formData.Attack= ""
        formData.Defense= ""
        formData.Special= ""
        formData.Speed= ""
    }


    return (
        <center className="outerContainer">
            <h3 className="form--title">New Pokemon Entry</h3>
            <form onSubmit={handleSubmit} className="newForm">
                <div className="formContainer">
                    <input 
                        className="formEntry"
                        type="number"
                        placeholder="Pokemon Number"
                        onChange={handleChange}
                        name="Number"
                        value={formData.Number}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Name of Pokemon"
                        onChange={handleChange}
                        name="Name"
                        value={formData.Name}
                    />
                    <input 
                        className="formEntry"
                        type="number"
                        placeholder="Number of Types"
                        onChange={handleChange}
                        name="Types"
                        value={formData.Types}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Type 1"
                        onChange={handleChange}
                        name="Type1"
                        value={formData.Type1}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Type 2 or 'None'"
                        onChange={handleChange}
                        name="Type2"
                        value={formData.Type2}
                    />
                    <input 
                        className="formEntry"
                        type="number"
                        placeholder="Height(m)"
                        onChange={handleChange}
                        name="Height(m)"
                        value={formData["Height(m)"]}
                    />
                    <input 
                        className="formEntry"
                        type="number"
                        placeholder="Weight(kg)"
                        onChange={handleChange}
                        name="Weight(kg)"
                        value={formData["Weight(kg)"]}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Male Encounter Percentage"
                        onChange={handleChange}
                        name="Male_Pct"
                        value={formData.Male_Pct}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Female Encounter Percentage"
                        onChange={handleChange}
                        name="Female_Pct"
                        value={formData.Female_Pct}
                    />
                    <button type="button" onClick={props.Close}>Close</button>
                </div>
                


                <div className="formContainer">
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Capture Rate"
                        onChange={handleChange}
                        name="Capt_Rate"
                        value={formData.Capt_Rate}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Experience Points Required"
                        onChange={handleChange}
                        name="Exp_Points"
                        value={formData.Exp_Points}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Experience Speed"
                        onChange={handleChange}
                        name="Exp_Speed"
                        value={formData.Exp_Speed}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Base Total Level"
                        onChange={handleChange}
                        name="Base_Total"
                        value={formData.Base_Total}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Hitpoints Stat"
                        onChange={handleChange}
                        name="HP"
                        value={formData.HP}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Attack Stat"
                        onChange={handleChange}
                        name="Attack"
                        value={formData.Attack}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Defense Stat"
                        onChange={handleChange}
                        name="Defense"
                        value={formData.Defense}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Special Stat"
                        onChange={handleChange}
                        name="Special"
                        value={formData.Special}
                    />
                    <input 
                        className="formEntry"
                        type="text"
                        placeholder="Speed Stat"
                        onChange={handleChange}
                        name="Speed"
                        value={formData.Speed}
                    />
                    <button>Add Pokemon</button>
                </div>   
            </form>
        </center>
        
    )
}