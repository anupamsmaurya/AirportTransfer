interface Props {
    name: string,
    label: string,
    value: string,
    options: {[key:string]: string}[],
    error?: string,
    onChangeHandler: ((event: React.ChangeEvent<HTMLSelectElement>) => void),
    onBlur?: ((event: React.FocusEvent<HTMLSelectElement>) => void)
}

const SelectField: React.FC<Props> = ({name, label, value, options, error, onChangeHandler, onBlur}) => {
    return (
        <div className='form-field selectbox'>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={onChangeHandler} onBlur={onBlur}>
                {
                    options.map(
                        option => <option value={option.key} key={option.key}>{option.value}</option>
                    )
                }
            </select>
            {error && <p>{error}</p>}
        </div>
    );
};

export default SelectField;