import { FIRST_NUM, SECOUND_NUM, THIRD_NUM } from "../exportNumbers/exportNum_client";


export const reduxRandom_Num = (state = {}, action) => {


    switch (action.type) {
        case FIRST_NUM:
            {
                return {

                    title: 'Поздравляем вы выиграли',
                    description: '',
                    text: "Играть занова",
                    completed: true
                }
            }

        case SECOUND_NUM: {
            return {


                title: 'Вы не отгодали число',
                description: action.iUper ? 'Берите ниже' : 'Берите выше',
                text: "Играть",
                completed: false

            }
        }
        case THIRD_NUM: {
            return {
                title: "",
                description: '',
                text: "Играть",
                completed: false
            }
        }
        default:
            return state
    }
}