import React, {FC} from 'react';

type Props = {
    changeSelect: (value: number) => void
    optionValues: number[]
}

export const Select: FC<Props> = ({changeSelect, optionValues}) => {
    return (
        <div>
            <select onChange={(e) => changeSelect(Number(e.target.value))} name="quantity" id="quantity-select">
                {optionValues.map((option, index) => (
                    <option key={index} value={`${option}`}>{option}</option>
                ))}
            </select>
        </div>
    );
};
