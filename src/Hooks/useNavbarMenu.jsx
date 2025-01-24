import { useDispatch, useSelector } from "react-redux";
import { toggleNavbarMenu } from "../Store/slices/app.slice";
function useNavbarMenu() {
    const { openMenu } = useSelector(state => state.app.navbar);
    const dispatch = useDispatch();
    const toggleMenu = (openState) => dispatch(toggleNavbarMenu(openState));
    return { openMenu, toggleMenu };
}
export default useNavbarMenu;