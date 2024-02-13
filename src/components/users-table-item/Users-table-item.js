import {Button} from "react-bootstrap";
import {useState} from "react";
import useUserService from "../../service/use-user-service";

const UsersTableItem = ({data}) => {
    const {updateUserRole, deleteUser, reviveUser, loading} = useUserService()
    const { id, email, username, role, deletedAt, createdAt, updatedAt } = data
    const [inputRole, setInputRole] = useState(role)
    const [inputDeletedAt, setInputDeletedAt] = useState(deletedAt)

    const onSave = () => {
        updateUserRole(id, inputRole)
            .then(({status}) => {
                if (status !== 200) {
                    alert("Unable to update user.");
                }
            })
    }

    const onDelete = () => {
        deleteUser(id)
            .then(res => {
                const {deletedAt} = res.data
                setInputDeletedAt(deletedAt)
            })

    }

    const onRevive = () => {
        reviveUser(id)
            .then(res => {
                const {deletedAt} = res.data
                setInputDeletedAt(deletedAt)
            })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{inputDeletedAt ? inputDeletedAt.substring(0, 10) : 'not deleted'}</td>
            <td>{createdAt.substring(0, 10)}</td>
            <td>{updatedAt.substring(0, 10)}</td>
            <td className={'p-1 align-middle'}>
                <select
                    value={inputRole}
                    onInput={e => setInputRole(e.target.value)}
                    className="form-select p-1 pe-2 w-100 d-block"
                >
                    <option>user</option>
                    <option>admin</option>
                </select>
            </td>
            <td className={'p-0 align-middle'}>
                <Button
                    onClick={onSave}
                    disabled={inputRole === role}
                    variant="secondary"
                    className={'py-0 mx-auto d-block'}
                >
                    save
                </Button>
            </td>
            <td className={'p-0 align-middle'}>
                <Button
                    onClick={inputDeletedAt ? onRevive : onDelete}
                    disabled={loading}
                    variant="secondary"
                    className={'py-0 mx-auto d-block'}
                >
                    {inputDeletedAt ? 'revive' : 'delete'}
                </Button>
            </td>
        </tr>
    )
}

export default UsersTableItem