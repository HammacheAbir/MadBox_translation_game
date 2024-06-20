import axios from "axios";
import { useQuery } from "react-query"

export const useGetWord = (round:number) =>{
  const { isLoading, data, status }:any = useQuery(['getRandomWorld',round],  async() =>
    {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/words/random`);
      return response.data;
    },{
      staleTime: 1000 * 60 * 60
    }
  )

  return{
    isLoading, data, status
  }
}