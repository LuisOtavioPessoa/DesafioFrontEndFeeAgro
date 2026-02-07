import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type InputFieldProps = {
    id: string;
    label: string;
    type?: 'text' | 'password' | 'number';
    register: UseFormRegisterReturn;
    error?: FieldError;
    disabled?: boolean;
    className?: string;
    classNameElement?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    label,
    type = 'text',
    disabled = false,
    register,
    error,
    className,
    classNameElement  
}) => {
    return(
        <div className={twMerge(
            'relative w-full flex flex-col gap-1',
            classNameElement
        )}>

            <input
                type={type}
                id = {id}
                placeholder=''
                disabled = {disabled}
                {...register}
                className={twMerge(
                    'peer w-full px-4 py-3 bg-primary-3 text-lg md:text-xl rounded-lg border border-gray-300 z-0',
                    'placeholder:text-gray-400 text-primary-4 focus:outline-none focus:border-[var(--color-primary-1)] focus:bg-white',
                    'transition',
                    'disabled:text-gray-700 disabled:border-gray-800 disabled:bg-gray-300 disabled:pointer-events-none'
                )}

            />

            <label 
                htmlFor={id} 
                className={twMerge(
                'absolute text-white text-xs md:text-sm -top-2.5 md:-top-3.5 left-2 px-2 rounded-lg bg-primary-2 z-10',
                'peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent',
                'peer-focus:text-white peer-focus:text-xs md:peer-focus:text-sm peer-focus:-top-2.5 peer-focus:md:-top-3.5 peer-focus:left-2 peer-focus:bg-primary-2',
                'pointer-events-none transition-all',
                className
            )}>
                <div className='absolute w-[calc(100%+4px)] h-full bg-inherit -left-0.5 -top-1.75 -z-10'/>
                <div className='absolute w-full h-full rounded-lg left-0'/>
                {label}
            </label>

             {error && (
                <span className='absolute text-right italic text-red-500 text-xs md:text-sm top-[68px] leading-3 md:leading-4 right-0'>
                {error.message}
                </span>
            )} 
        </div>
    );
};

export default InputField;
