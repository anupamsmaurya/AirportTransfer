import TransferForm from '../forms/trasnfer-form'
import TransferSuccess from '../transfer-success'
import { useMutation } from '@apollo/client/react'
import { CREATE_BOOKING_MUTATION } from '../../graphql/mutations'
import { submitFormType } from '../../utils/typeDefinitions'
import Loading from '../loading'
import './app.scss'

const App = () => {
    const [mutate, { loading, error, data }] = useMutation(CREATE_BOOKING_MUTATION);

    const submitForm: submitFormType = (values) => {
        mutate({ variables: values })
    }
    
    return (
            <div className='app-root'>
                <h1>Airpot Transfer</h1>
                <TransferForm submitForm={submitForm} />
                {loading && <Loading />}
                {data && <TransferSuccess />}
            </div>
    )
}

export default App