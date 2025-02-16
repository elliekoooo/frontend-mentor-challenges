import plus from '/assets/images/icon-plus.svg';
import minus from '/assets/images/icon-minus.svg';

export const ScoreBox = ({ score }:any) => {

    return (
        <div className="score-box mr-4">
            <div className="flex mx-auto my-auto has-text-centered">
                <div>
                    <img src={plus} className="is-clickable"></img>
                </div>
                {/* FIXME 조회수 4자리로 늘어날때 어떻게 할지 고민해보기 */}
                <div className="py-custom-1">{score}</div>
                <div>
                    <img src={minus} className="is-clickable"></img>
                </div>
            </div>
        </div>
    )
};