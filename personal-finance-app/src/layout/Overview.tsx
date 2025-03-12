import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { IRootState } from "../store";

export const OverView = () => {
    const _data = useSelector((state:IRootState)=> state.dataReducer);
    const balance = Object.values(_data.balance);

    return (
        <div>
            <h1 className="font-bold text-2xl">OverView</h1>
            <div className="flex">
               {
                    balance.map((b:number)=> (
                        <Card subTitle="Current Balance">
                            <div className="text-3xl font-bold">{b}</div>
                        </Card>
                    ))
               }
            </div>
            <div className="flex">
                <div className="flex-col">
                    <div>
                        <h1 className="font-bold text-2xl">
                            Pots
                        </h1>
                    </div>
                    <div className="">
                        Transactions
                    </div>
                </div>
                <div className="flex-col">
                    <div className="">
                        Budgets
                    </div>
                    <div className="">
                        Recurring Bills
                    </div>
                </div>

            </div>
        </div>
    )

};