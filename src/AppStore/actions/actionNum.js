import { FIRST_NUM, SECOUND_NUM, THIRD_NUM } from "../exportNumbers/exportNum_client"


export const firstNum = () =>(
  {
    type: FIRST_NUM
  }
)

export const secoundNum = (iUper) =>(
    {
        type: SECOUND_NUM,
      iUper,
    }
)
    


export const thirdNum = ()=>(
    {
        type: THIRD_NUM
    }
)