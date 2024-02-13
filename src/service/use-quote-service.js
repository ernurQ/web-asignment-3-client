import useHttp from "../hooks/use-http-hook";

const useQuoteService = () => {
    const {request, ...httpSates} = useHttp()

    const getQuote = async () => {
        const options ={
            method: 'GET',
            url: `/external-apis/quote`,
        }
        return request(options)
    }

    const getHistory = async () => {
        const options ={
            method: 'GET',
            url: `/external-apis/quote/history`,
        }
        return request(options)
    }

    return {
        ...httpSates,
        getQuote,
        getHistory,
    }
}

export default useQuoteService