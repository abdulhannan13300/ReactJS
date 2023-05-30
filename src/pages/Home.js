import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

export const Home = () => {
    const { data,isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if(isLoading) 
        return <h2>Loading...</h2>

    if(isError)
        return <h2>Sorry, there was an error...</h2>    
    return (
        <h1> This is the Home Page <p> {data?.fact} </p>
        {/* //refetches the updated data from the APi Again */}
        <button onClick={refetch}> Update Data </button>
        </h1>
    )
}