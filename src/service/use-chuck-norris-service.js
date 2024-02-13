import useHttp from "../hooks/use-http-hook";

const useChuckNorrisService = () => {
    const {request, ...httpSates} = useHttp()

    const getJoke = async () => {
        const options ={
            method: 'GET',
            url: `/external-apis/joke`,
        }
        return request(options)
    }

    const getHistory = async () => {
        const options ={
            method: 'GET',
            url: `/external-apis/joke/history`
        }
        return request(options)
    }

    return {
        ...httpSates,
        getJoke,
        getHistory,
    }
}

export default useChuckNorrisService