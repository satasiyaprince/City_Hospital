import { combineReducers } from "redux";
import UpadateMedicine from "./Medicine";
import { addMedicine } from "./MedicineData";

const rootReducer = combineReducers({
    UpadateMedicine,
    addMedicine
})

export default rootReducer