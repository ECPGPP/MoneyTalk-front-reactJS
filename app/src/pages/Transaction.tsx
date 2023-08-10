import { OutletProps, useOutletContext, useParams } from "react-router-dom";

function Transaction() {
    const { id } = useParams();
    const contextMessage:any = useOutletContext();
    return (
        <div>
            <h1>Transaction</h1>
            <h1>{id}</h1>
            <p>{contextMessage.testMessage}</p>
        </div>
    )
}

export default Transaction;
