import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, } from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.option}
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const changeEvent = Number(e.currentTarget.value)
        if(onChangeOption)onChangeOption(changeEvent)// делают студенты
        
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <div className={finalSelectClassName}>
        <select
            
            onChange={onChangeCallback}
            {...restProps}
        >            
            {mappedOptions}
        </select>
        </div>
    )
}

export default SuperSelect
