
import plus from '/assets/images/icon-plus.svg';
import minus from '/assets/images/icon-minus.svg';
import reply from '/assets/images/icon-reply.svg';
import del from '/assets/images/icon-delete.svg';
import edit from '/assets/images/icon-edit.svg';

import { button } from '../store/types';

const Button = ({ 
    size, disabled, color, click, type, text, hidden
 }:button)=> {


    const getIconUrl = ()=>{
        let icon;
        switch(type){
            case "del" : 
                icon = del;
                break;
            case "edit" : 
                icon = edit;
                break;
            case "reply" : 
                icon = reply;
                break;
            case "plus": 
                icon = plus;
                break;
            case "minus": 
                icon= minus;
                break;
        }
        return icon;
    };
    
    return (
        <p className={color+" has-addons "+(hidden ? "is-hidden":"")}>
            <button 
                className={color+" button button-group is-size-"+(size ?? 6)} 
                disabled={disabled ?? false} 
                onClick={click}
            >
                <span className={ type == "" ? "is-hidden" : "icon is-small"}>
                    <img className={"is-size-"+size} src={getIconUrl()}/>
                </span>
                <span className={color}>{text}</span>
            </button>
        </p>
    )
};


export default Button;