import { createStore } from 'redux'
import { reduxRandom_Num } from './reduxs/reduxNum'

export const store = createStore(reduxRandom_Num)