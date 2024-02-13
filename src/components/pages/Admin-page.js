import {Container} from "react-bootstrap";
import UsersTable from "../users-table/Users-table";

const AdminPage = () => {

    return (
        <Container className={'py-5'}>
            <h1>Admin Page</h1>
            <UsersTable />
        </Container>
    )
}

export default AdminPage