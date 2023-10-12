import {CategoriesPropsType} from "../App";

let initialCategories:CategoriesPropsType[] = [
    {
        id: '1',
        icoId: 'RiBillFill',
        bgColor: '#06b681',
        title: 'Bills',
        value: '875.00'
    },
    {
        id: '2',
        icoId: 'AiOutlineStock',
        bgColor: '#ff9165',
        title: 'Investments',
        value: '3000.00'
    },
]

export const categoriesReducer = (state = initialCategories, action:any):CategoriesPropsType[] => {
    switch (action.type) {
        case 'ADD_CATEGORY': {
            return state;
        }
        default:
            return state
    }
}