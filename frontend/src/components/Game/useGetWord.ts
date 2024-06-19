import { useQuery } from "react-query"

export const useGetWord = (round:number) =>{
    const { isLoading, data, status }:any = useQuery(['getRandomWorld',round],  () =>
    {
      return{
        en:"generate",
        fr:"generer"
      }
    }
  )

  return{
    isLoading, data, status
  }
}