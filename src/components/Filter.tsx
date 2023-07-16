import React, {useState} from 'react';
import styled from "styled-components";
import {TbArrowsTransferDown} from "react-icons/tb";
import {SortType} from "../App";

type FilterPropsType = {
    sortByValue: (sortVal: SortType) => void
}
export const Filter: React.FC<FilterPropsType> = ({sortByValue}) => {
    const [isFilterMaxVisible, setIsFilterMaxVisible] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const handleFilterBtnClick = (filter: string) => {
        if(selectedFilter === filter) {
            setIsFilterMaxVisible(!isFilterMaxVisible);
        } else {
            setIsFilterMaxVisible(true);
        }
        setSelectedFilter(filter);
    }

    return (
        <>
            <StyledFilter>
                <StyledFilterBtn onClick={() => handleFilterBtnClick('groupBy')}>Group By <TbArrowsTransferDown/></StyledFilterBtn>
                <StyledFilterBtn onClick={() => handleFilterBtnClick('realisation')}>Realisation <TbArrowsTransferDown/></StyledFilterBtn>
                <StyledFilterBtn onClick={() => handleFilterBtnClick('dates')}>Dates <TbArrowsTransferDown/></StyledFilterBtn>
                <StyledFilterBtn onClick={() => handleFilterBtnClick('types')}>Types <TbArrowsTransferDown/></StyledFilterBtn>
                <StyledFilterBtn onClick={() => handleFilterBtnClick('categories')}>Categories<TbArrowsTransferDown/></StyledFilterBtn>
                <StyledFilterBtn onClick={() => handleFilterBtnClick('sort')}>Sort<TbArrowsTransferDown/></StyledFilterBtn>
            </StyledFilter>
            <StyledFilterMax visible={isFilterMaxVisible}>
                {selectedFilter === 'groupBy' && (
                    <>
                        {/* Buttons for 'Group By' filter */}
                        {/* Add your specific buttons here */}
                    </>
                )}
                {selectedFilter === 'realisation' && (
                    <>
                        {/* Buttons for 'Realisation' filter */}
                        {/* Add your specific buttons here */}
                    </>
                )}
                {selectedFilter === 'dates' && (
                    <>
                        {/* Buttons for 'Dates' filter */}
                        {/* Add your specific buttons here */}
                    </>
                )}
                {selectedFilter === 'types' && (
                    <>
                        {/* Buttons for 'Types' filter */}
                        {/* Add your specific buttons here */}
                    </>
                )}
                {selectedFilter === 'categories' && (
                    <>
                        {/* Buttons for 'Categories' filter */}
                        {/* Add your specific buttons here */}
                    </>
                )}
                {selectedFilter === 'sort' && (
                    <>
                        <button onClick={() => sortByValue('standard')}>Standard</button>
                        <button onClick={() => sortByValue('ascending')}>Ascending</button>
                        <button onClick={() => sortByValue('descending')}>Descending</button>
                    </>
                )}
            </StyledFilterMax>
        </>
    );
};

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const StyledFilterBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid rgba(128, 128, 128, .4);
  color: rgba(128, 128, 128, 1);
`

interface StyledFilterMaxType {
    visible: boolean
}

const StyledFilterMax = styled.div<StyledFilterMaxType>`
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 30px 0;
  margin-bottom: 20px;
`