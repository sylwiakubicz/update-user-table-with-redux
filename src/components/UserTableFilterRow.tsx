import {useEffect} from 'react'
import {applyFilters} from "../redux/user/userSlice"
import { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter } from '../redux/usersFilters/userFiltersSlice';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import SortArrows from './SortArrows';


function UserTableFilterRow() {
    
    const sortProps = useSelector((state : RootState) => state.userSort)
    const usersFilters = useSelector((state : RootState) => state.userFilters)
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(applyFilters(usersFilters));
    }, [dispatch, usersFilters]);

    return (
    <tr>
        <th className='pl-6 pb-2'>
            <div className="flex items-center gap-2">
                <input
                type="text"
                placeholder="Filter by name"
                value={usersFilters.name}
                onChange={(e) => dispatch(setNameFilter(e.target.value))}
                className="flex-grow px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
                />
                <SortArrows colName='name' activeSort={sortProps.columnName === 'name'} />
            </div>

        </th>
        <th className='pl-6 pb-2'>
            <div className="flex items-center gap-2">
                <input
                type="text"
                placeholder="Filter by username"
                value={usersFilters.username}
                onChange={(e) => dispatch(setUsernameFilter(e.target.value))}
                className="flex-grow px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
                />
                <SortArrows colName='username' activeSort={sortProps.columnName === 'username'} />
            </div>
        </th>
        <th className='pl-6 pb-2'>
            <div className="flex items-center gap-2">
                <input
                type="text"
                placeholder="Filter by email"
                value={usersFilters.email}
                onChange={(e) => dispatch(setEmailFilter(e.target.value))}
                className="flex-grow px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
                />
                <SortArrows colName='email' activeSort={sortProps.columnName === 'email'} />
            </div>

        </th>
        <th className='pl-6 pb-2 pr-6'>
            <div className="flex items-center gap-2">
                <input
                type="text"
                placeholder="Filter by phone"
                value={usersFilters.phone}
                onChange={(e) => dispatch(setPhoneFilter(e.target.value))}
                className="flex-grow px-2 py-1 h-9 font-light placeholder:opacity-70 border-[1px] border-gray-200 dark:border-dark-secondary dark:bg-dark-text dark:placeholder:text-dark-secondary dark:text-dark-secondary focus-visible:outline-none"
                />
                <SortArrows colName='phone' activeSort={sortProps.columnName === 'phone'} />
            </div>
        </th>
    </tr>
    )
}

export default UserTableFilterRow