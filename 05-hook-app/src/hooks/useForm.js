import { useState } from "react";

export const useForm = ( initialForm ) => {

    const [ form, setForm ] = useState( initialForm );

    const handleOnChange = ( { target } ) => {
        setForm({
            ...form,
            [ target.name ]: target.value
        })
    }

    return [ form, handleOnChange ];

}