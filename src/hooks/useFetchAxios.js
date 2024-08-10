import { useEffect, useState } from "react"
import axios from "axios";

const UseFetchAxios = (dataUrl) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();
        let isMounted = true;

        const fetchData = async(sourceUrl) => {
            try{
                setLoading(true);
                const response = await axios.get(sourceUrl, {
                    cancelToken: source.token
                })
                setData(response.data);
                setError(null);
            } catch (error){
                setError(error.response.data);
                setData([]);
            } finally {
                isMounted && setTimeout(() => {
                    setLoading(false);
                }, 3000)
            }
        }

        const cleanUp = () => {
            isMounted = false && source.cancel();
        }

        fetchData(dataUrl);

        return cleanUp;
    }, [dataUrl])

    return {data, loading, error};
}


export default UseFetchAxios;