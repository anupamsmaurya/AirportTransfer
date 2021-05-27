import TextField from '../../inputs/textfield'
import SelectField from '../../inputs/selectfield'
import useForm from '../../../utils/useForm'
import validateForm from '../../../utils/validateForm'
import { submitFormType } from '../../../utils/typeDefinitions'
import './transfer-form.scss';

interface Props {
    submitForm: submitFormType
}

const TransferForm: React.FC<Props> = ({ submitForm }) => {
    const { handleChange, handleBlur, handleSubmit, values, errors } = useForm(
        submitForm,
        validateForm
    );
    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <div className='form-container'>
                    <TextField
                        name='fullname'
                        label='Fullname'
                        value={values.fullname}
                        onChangeHandler={handleChange}
                        onBlur={handleBlur}
                        error={errors.fullname}
                        placeholder='Enter your name'
                    />
                    <TextField
                        name='mobile'
                        label='Mobile Number'
                        value={values.mobile}
                        onChangeHandler={handleChange}
                        onBlur={handleBlur}
                        error={errors.mobile}
                        placeholder='+44 0123456789'
                    />
                    <TextField
                        name='arrivalDate'
                        label='Arrival Date'
                        value={values.arrivalDate}
                        onChangeHandler={handleChange}
                        onBlur={handleBlur}
                        error={errors.arrivalDate}
                        placeholder='dd/mm/yyyy'
                    />
                    <TextField
                        name='flight'
                        label='Flight Number'
                        value={values.flight}
                        onChangeHandler={handleChange}
                        onBlur={handleBlur}
                        error={errors.flight}
                        placeholder='6E1234'
                    />
                    <SelectField
                        name='airport'
                        label='Airport'
                        onChangeHandler={handleChange}
                        onBlur={handleBlur}
                        value={values.airport}
                        options={[
                            { key: '', value: '--Select--' },
                            { key: 'Heathrow', value: 'Heathrow' },
                            { key: 'Gatwick', value: 'Gatwick' }
                        ]}
                        error={errors.airport}
                    />
                    {
                        values.airport === 'Heathrow' &&
                        <SelectField
                            name='terminal'
                            label='Terminal'
                            value={values.terminal}
                            onChangeHandler={handleChange}
                            onBlur={handleBlur}
                            options={[
                                { key: '1', value: '1' },
                                { key: '2', value: '2' },
                                { key: '3', value: '3' },
                                { key: '4', value: '4' },
                                { key: 'not sure', value: 'not sure' },
                            ]}
                            error={errors.terminal}
                        />
                    }
                </div>

                <div className='actions'>
                    <button className='form-input-btn' type='submit'>
                        Submit
                    </button>
                </div>

            </form>
        </>
    );
};

export default TransferForm;