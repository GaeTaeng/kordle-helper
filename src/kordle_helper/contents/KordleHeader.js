
import { GAME_TYPE } from "./kordleConst";

function KordleHeader(params) {
    const selectList = [
        {value : GAME_TYPE.KORDLE, name : "꼬들"},
        {value : GAME_TYPE.KOOOOOODLE, name : "꼬오오오오들"}
    ]
    return (
        <div>
            <select className="gameSelect" onChange={params.onSelect} value={GAME_TYPE[params.type]}>
                {selectList.map(item => {
                    return <option value={item.value} key = {item.value}>
                        {item.name}
                    </option>
                })}
            </select>
        </div>
    )
    
}

export default KordleHeader;