import styles from './FormsControls.module.css'


const FormControl = ({input, meta, ...props}:any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError && styles.formControl + ' ' + styles.error}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props:any) => {
    const {input, meta, ...restProps} = props
    return <FormControl{...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props:any ) => {
    const {input, meta, ...restProps} = props
    return <FormControl{...props}><input {...input} {...restProps}/></FormControl>
}

