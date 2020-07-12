import React from "react";
import styles from './FormsControl.module.css';

const FormControl = ({input, meta:{touched, error}, children}) => { //таким способом мы достаем из пропсов всё, кроме мета и инпута

    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}
