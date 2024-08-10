import { useEffect, useState } from "react"
import axios from "axios";


const useAxiosFetch = (dataUrl) => {
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (sourceUrl) => {
            setIsLoading(true);
            try{
                if(isMounted){
                    const response = await axios.get(sourceUrl, {
                        cancelToken: source.token
                    })
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (error) {
                if(isMounted){
                    setFetchError(error.message);
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }
    
        fetchData(dataUrl);

        const cleanUp = () => {
            console.log('Cleaning up.');
            isMounted = false;
            source.cancel();
        }   

        return cleanUp;

    }, [dataUrl])

    return {data, isLoading, fetchError};

}

export default useAxiosFetch;