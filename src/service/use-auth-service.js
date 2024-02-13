import useHttp from "../hooks/use-http-hook";

const useAuthService = () => {
    const {request, ...httpStates} = useHttp()

    const register = (email, password, username) => {
        const options = {
            method: "POST",
            url: "/auth/register",
            data: { email, password, username},
        }

        return request(options)
    }

    const login = async (email, password) => {
        const options = {
            method: "POST",
            url: "/auth/login",
            data: { email, password}
        }

        const response = await request(options)
        localStorage.setItem("token", response.data.accessToken)

        return response
    }

    const logout = () => {
        const options = {
            method: "POST",
            url: "/auth/logout",
        }
        localStorage.removeItem("token")
        return request(options)
    }

    const checkAuth = async () => {
        const options = {
            method: "GET",
            url: "/auth/refresh",
        }
        const response = await request(options)
        localStorage.setItem('token', response.data.accessToken)

        return response
    }

    return {
        ...httpStates,
        register,
        login,
        logout,
        checkAuth,
    }
}

export default useAuthService