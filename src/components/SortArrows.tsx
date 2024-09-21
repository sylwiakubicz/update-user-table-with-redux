import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { applySort } from '../redux/user/userSlice';
import { useEffect } from 'react';
import { sortAsc, sortDesc } from '../redux/usersFilters/userSortSlice';

interface SortArrowsProps {
    colName : string
    activeSort : boolean
}

function SortArrows({colName, activeSort} : SortArrowsProps) {


    const sortProperties = useSelector((state : RootState) => state.userSort)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(applySort(sortProperties))
        console.log(sortProperties)
    }, [dispatch, sortProperties])

    return (
        <div className="flex flex-col justify-between h-[1.35rem]">
        <div
            className={`w-0 h-0 border-x-[0.45rem] border-x-transparent border-b-[0.6rem] cursor-pointer ${
                sortProperties.sortDirection === 'ASC' && activeSort
                    ? 'dark:border-b-dark-akcent-color'
                    : 'dark:border-b-dark-text'
            }`}
            onClick={() => dispatch(sortAsc(colName))}
        ></div>
        <div
            className={`w-0 h-0 border-x-[0.45rem] border-x-transparent border-t-[0.6rem] cursor-pointer ${
                sortProperties.sortDirection === 'DESC' && activeSort
                    ? 'dark:border-t-dark-akcent-color'
                    : 'dark:border-t-dark-text'
            }`}
            onClick={() => dispatch(sortDesc(colName))}
        ></div>
    </div>
);
}

export default SortArrows