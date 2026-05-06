import "./App.css"

import { useState } from "react";
import Selecter from "./components/Selecter/Selecter";

function App() {
    const tenColors: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
    const twoColors: string[] = ["gold", "silver"];

    const [firstColorIndex, SetFirst] = useState(0);
    const [secondColorIndex, SetSecond] = useState(0);
    const [thirdColorIndex, SetThird] = useState(0);
    const [forthColorIndex, SetForth] = useState(0);

    return(
        <>
            <Selecter colors={tenColors} onChange={SetFirst}/>
            <Selecter colors={tenColors} onChange={SetSecond}/>
            <Selecter colors={tenColors} onChange={SetThird}/>
            <Selecter colors={twoColors} onChange={SetForth}/>
            <div style={{flexGrow: "1", position: "relative"}}>
                <p style={{fontSize: "10vh", position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)", width: "max-content"}}>
                    {firstColorIndex}{secondColorIndex} x 10 ±{forthColorIndex == 0 ? "5%" : "10%"}
                </p>
                <p style={{fontSize: "6vh", position: "absolute", top: "30%", left: "52%"}}>
                    {thirdColorIndex}
                </p>
            </div>
        </>
    );
}

export default App;
