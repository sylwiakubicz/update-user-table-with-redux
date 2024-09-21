import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { applySort } from '../redux/user/userSlice';
import { useEffect } from 'react';
import { sortAsc, sortDesc } from '../redux/usersFilters/userSortSlice';

interface SortArrowsProps {
    colName : string
}

function SortArrows({colName} : SortArrowsProps) {


    const sortProperties = useSelector((state : RootState) => state.userSort)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(applySort(sortProperties))
        console.log(sortProperties)
    }, [dispatch, sortProperties])

    return (
        <div className='flex flex-col justify-between h-[1.35rem]'>
            <div 
                className='w-0 h-0 border-x-[0.45rem] border-x-transparent border-b-[0.6rem] border-b-dark-dark-text cursor-pointer'
                onClick={() => dispatch(sortAsc(colName))}
                ></div>
            <div 
                className='w-0 h-0 border-x-[0.45rem] border-x-transparent border-t-[0.6rem] border-t-dark-dark-text cursor-pointer'
                onClick={() => dispatch(sortDesc(colName))}
                ></div>
        </div>
    )
}

export default SortArrows