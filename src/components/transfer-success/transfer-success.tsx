import { useState } from 'react';
import './transfer-success.scss'

function TransferSuccess() {
    const [hide, setHide] = useState(false)

    if(hide) return <></>
    return (
        <div className='root'>
            <a href='#' onClick={() => setHide(true)}> x</a>
            Successfully Submitted
        </div>
    );
}

export default TransferSuccess;