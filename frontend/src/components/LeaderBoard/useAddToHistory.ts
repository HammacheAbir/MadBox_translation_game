import axios from "axios";
import { useQuery } from "react-query"

export const useAddToHistory = (name:string,score:number)=>{
    const { isLoading, status }:any = useQuery(['addToLeadersBoard',name,score],  async() =>
    {
        if(score>20){
          await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/players`,{name,score});

          setTimeout(()=>{
            window.location.reload();
          },2000)
        }
    },{
      staleTime: 1000 * 60 * 60
    }
  )

  return{
    isLoading,
    status
  }
}