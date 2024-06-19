import { useQuery } from "react-query"

export const useGetLeaders = ()=>{
    const { isLoading, data, status }:any = useQuery(['getLeaders'],  () =>
    {
      return[
            {
                name:"Abir",
                score:20
            },
            {
                name:"Abir",
                score:20
            },
            {
                name:"Abir",
                score:20
            },
            {
                name:"Abir",
                score:20
            },
            {
                name:"Abir",
                score:20
            }
        ]
    }
  )

  return{
    isLoading, data, status
  }
}