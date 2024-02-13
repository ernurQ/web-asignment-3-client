import {Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import useUserService from "../../service/use-user-service";
import UsersTableItem from "../users-table-item/Users-table-item";
import {useNavigate} from "react-router-dom";

const UsersTable = () => {
    const [users, setUsers] = useState([])
    const {getUsers, loading} = useUserService()
    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
            .then(({data}) => setUsers(data))
            .catch(() => navigate('/login'))
    }, []);

    const spinner = loading? <Spinner className={'d-block mx-auto'} /> : null

    return (
        <>
            <Table striped bordered hover className={'mt-5'}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th>username</th>
                    <th>Deleted at</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {
                    users.map((user) => (
                        <UsersTableItem key={user.id} data={user} />
                    ))
                }
                </tbody>
            </Table>
            {spinner}
        </>
    )
}

export default UsersTable