import { useQuery } from "react-query"

export const useAddToHistory = (name:string,score:number)=>{
    const { isLoading, status }:any = useQuery(['addToLeadersBoard',name,score],  () =>
    {
        if(score>20){
          // add to players
          console.log("adding to history")

          setTimeout(()=>{
            window.location.reload();
          },2000)
        }
    }
  )

  return{
    isLoading,
    status
  }
}