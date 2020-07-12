export const required = value =>{
    if(value) return undefined;
    return 'Field is required'
}

export const emailValidator = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Enter a valid e-mail'  : undefined

