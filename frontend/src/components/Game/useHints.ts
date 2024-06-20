import { useState, useMemo } from "react";

export const useHints = (data:any) =>{
    const [showHint1, setShowHint1] = useState(false);
    const [showHint2, setShowHint2] = useState(false);

    const {variant1, text1}:{variant1:'outlined' | 'contained',text1:string} = useMemo(()=>{
        if(showHint1){
            return {
                variant1:"outlined",
                text1:`Your word contains ${data?.en?.length} letters`
            } 
        }
        return {
            variant1:"contained",
            text1:"Show first hint"
        }
    },[showHint1, data])

    const {variant2, text2}:{variant2:'outlined' | 'contained',text2:string} = useMemo(()=>{
        if(showHint2){
            return {
                variant2:"outlined",
                text2:`Your word starts with letter "${data?.en[0]}"`
            } 
        }
        return {
            variant2:"contained",
            text2:"Show first hint"
        }
    },[showHint2, data])

    return{
        onClickHint1:()=>{setShowHint1(true)},
        onClickHint2:()=>{setShowHint2(true)},
        variant1,
        variant2,
        text1,
        text2
    }
}