import React, {ChangeEvent, FC} from 'react';
import {UniversalInputType} from "./UniversalInputTypes";

export const UniversalInput:FC<UniversalInputType> = ({...props}) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value);
    }
    return  (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={onChangeHandler}
        />
    )
};