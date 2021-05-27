import { useState } from 'react';
import './transfer-success.scss'

function TransferSuccess() {
    const [hide, setHide] = useState(false)

    if(hide) return <></>
    return (
        <div className='root'>
            <button onClick={() => setHide(true)}>x</button>
            Successfully Submitted
        </div>
    );
}

export default TransferSuccess;