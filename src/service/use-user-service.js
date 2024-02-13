import useHttp from "../hooks/use-http-hook";

const useUserService = () => {
    const {request, ...httpSates} = useHttp()

    const getUsers = async (offset=0, limit=10) => {
        const options = {
            method: 'GET',
            url: `/users`,
        }
        return request(options)
    }

    const updateUserRole = async (userId, role) => {
        const options = {
            method: 'PUT',
            url: `/users/${userId}/update`,
            data: {role},
        }
        return request(options)
    }

    const deleteUser = async (userId) => {
        const options = {
            method: 'DELETE',
            url: `/users/${userId}/delete`
        }
        return request(options)
    }

    const reviveUser = async (userId) => {
        const options = {
            method: 'PUT',
            url: `/users/${userId}/revive`,
        }
        return request(options)
    }

    return {
        ...httpSates,
        getUsers,
        updateUserRole,
        deleteUser,
        reviveUser,
    }
}

export default useUserService