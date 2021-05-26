interface Props {
    name: string,
    label: string,
    value: string,
    error?: string,
    onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void)
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void)
}

const TextField: React.FC<Props> = ({ name, label, value, error, onChangeHandler, onBlur }) => {
    return (
        <div className='form-field inputbox'>
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name} value={value} onChange={onChangeHandler} onBlur={onBlur} />
            {error && <p>{error}</p>}
        </div>
    );
};

export default TextField;