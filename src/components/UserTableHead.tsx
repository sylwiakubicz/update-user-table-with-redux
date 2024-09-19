import UserTableFilterRow from './UserTableFilterRow';
import ResetButton from './ResetButton';
import SortArrows from './SortArrows';

function UserTableHead() {
    return (
    <thead  className="text-[1rem] text-gray-700 uppercase bg-custom-light-gray dark:bg-dark-secondary dark:text-dark-text relative">
        <tr>
            <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color flex gap-3 align-center" >
                <span className="pt-0.5">Name</span>
                <SortArrows />
            </th>
            <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Username</th>
            <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Email</th>
            <th scope="col" className="px-6 pt-3 pb-1 text-akcent-color dark:text-dark-akcent-color">Phone number</th>
        </tr>
        <UserTableFilterRow />
        <th colSpan={4} className="text-end">
            <ResetButton />
        </th>
    </thead>
    )
}

export default UserTableHead