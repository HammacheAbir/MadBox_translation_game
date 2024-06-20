import axios from "axios";
import { useQuery } from "react-query"

export const useGetLeaders = () => {
    const { isLoading, data, status }: any = useQuery(['getLeaders'], async () => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/players/leaderboard`);
        console.log(response)
        return response.data;
    }, {
            staleTime: 1000 * 60 * 60
        }
    )

    return {
        isLoading, data, status
    }
}