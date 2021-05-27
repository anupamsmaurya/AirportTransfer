import { useEffect, useState } from 'react';
import { FormValuesType, ObjectMap, submitFormType } from './typeDefinitions';

type validateType = (values: FormValuesType, field?: string, errors?: ObjectMap) => ObjectMap

const useForm = (callback: submitFormType, validate: validateType) => {
    const [values, setValues] = useState({
        fullname: '',
        mobile: '',
        arrivalDate: '',
        flight: '',
        airport: '',
        terminal: ''
    });
    const [errors, setErrors] = useState<ObjectMap>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback(values);
            }
        },
        [errors]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = e.target
        const newErrors = validate(values, name, errors)
        setErrors({...errors, ...newErrors});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    return { handleChange, handleBlur, handleSubmit, values, errors };
}

export default useForm;