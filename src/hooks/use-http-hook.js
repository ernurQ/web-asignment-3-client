import {useCallback, useState} from "react";
import $api from "../http";

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (requestOptions) => {
        setLoading(true)
        try {
            return await $api(requestOptions)
        }
        catch (err) {
            setError(err.response.data.message)
            throw err.response
        }
        finally {
            setLoading(false)
        }
    }, [])

    const clearError = useCallback(() => {
        setError(null)
    }, [])

    return {loading, error, clearError, request}
}

export default useHttp