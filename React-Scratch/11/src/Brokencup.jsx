import { useState } from "react";


export function BrokenCup(){
    const [isbroken,setBroken] = useState(false)

    if(!isbroken){
        throw new Error("the Cup is Broken")
    }

    return(
        <div>
            <h1>Chai aur late Night React</h1>
            <button onClick={()=>setBroken(true)}>Break the Cup</button>
        </div>
    )
}