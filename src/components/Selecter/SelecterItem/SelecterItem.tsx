import "./SelecterItem.css"

type Props = {
    color: string,
    transform: number,
    selected: boolean,
    onClick: () => void
};

function SelecterItem({color, transform, selected, onClick}: Props) {
    return(
        <>
            <li className="selecter-item" style={{backgroundColor: color, transform: `translateX(${transform}px) scale(${selected ? 1 : 0.75})` }} onClick={onClick}/>
            <li className="selecter-item-specer"/>
        </>
    );
}

export default SelecterItem;
