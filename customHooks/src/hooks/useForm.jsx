import { useState } from "react";

export default function useForm(initialValues = {}, onSubmit = () => { }) {
    const [value, setValue] = useState(initialValues);
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value:inputValue } = e.target;
        setValue(prev=>({
            ...prev,
            [name]: inputValue,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate(value);
        if(Object.keys(validationErrors).length==0){
            onSubmit(value);
        }
        else{
            setErrors(validationErrors);
        }
    }

    function validate(vals){
        const newErrors={};
        for(const key in vals){
            if(!vals[key]){
                newErrors[key]='This field is required';
            }
        }
        return newErrors;
    }

    return {
        value,
        errors,
        handleChange,
        handleSubmit
    }
}