import iconPlus from '/assets/images/icon-plus.svg';
import iconMinus from '/assets/images/icon-minus.svg';
import { useDispatch } from 'react-redux';
import { score } from '../store';

export const ScoreBox = ({ prop }:any) => {
    const dispatch = useDispatch();

    const click = (type: string) => {
        if(prop.score == 0 && type == "minus")
            return;
        dispatch(score({type: type, data: prop}));;
    };

    return (
        <div className="score-box mr-4">
            <div className="flex mx-auto my-auto has-text-centered">
                <div className={prop.type == "d" ? "":"is-clickable"} onClick={()=> prop.type == "d"? "": click("plus")}>
                    <img src={iconPlus}></img>
                </div>
                {/* FIXME 조회수 4자리로 늘어날때 어떻게 할지 고민해보기 */}
                <div className={"moderate-blue-font has-text-weight-bold"}>{prop.score}</div>
                <div className={prop.type == "d" ? "":"is-clickable"} onClick={()=> prop.type == "d"? "": click("minus")}>
                    <img src={iconMinus} className="pb-1"></img>
                </div>
            </div>
        </div>
    )
};