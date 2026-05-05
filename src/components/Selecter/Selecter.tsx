import "./Selecter.css"

import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize/useWindowSize";
import SelecterItem from "./SelecterItem/SelecterItem";

type Props = {
    colors: string[],
    onChange: (i: number) => void
}

function Selecter({colors, onChange}: Props) {
    const [selected, Select] = useState(0);
    const windowSize = useWindowSize();
    const center = windowSize.windowWidth / 2 - windowSize.windowHeight * 0.05;
    const unit = windowSize.windowHeight * 0.15;

    return(
        <>
            <div className="selecter-specer"/>
            <ul className="selecter">
                {colors.map((color, i) => (
                    <SelecterItem key={i} color={color} transform={center - unit * selected} selected={i == selected} onClick={() => {
                        Select(i);
                        onChange(i);
                    }}/>
                ))}
            </ul>
        </>
    );
}

export default Selecter;
