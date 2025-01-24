import { useDispatch, useSelector } from "react-redux";
import { selectPlan } from "../Store/slices/app.slice";
function usePlans() {
    const { planSelected } = useSelector(state => state.app.plans)
    const dispatch = useDispatch();
    const setPlane = (plane) => dispatch(selectPlan(plane));
    return { planSelected, setPlane }
}
export default usePlans;