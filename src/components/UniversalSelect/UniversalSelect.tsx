import React, {FC} from 'react';
import {UniversalSelectType} from "./UniversalSelectTypes";

export const UniversalSelect: FC<UniversalSelectType> = ({...props}) => {
    return (
        <select>
            {props.options.map(option => {
                    return (
                        <option key={option.id}>{option.title}</option>)
                })
            }
        </select>
    );
};