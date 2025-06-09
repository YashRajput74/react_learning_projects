import UseDebugValue from "./UseDebugValue";
import UseDefferedValue from "./UseDefferedValue";
import { UseId } from "./UseId";

export default function App() {
    return (
        <div>
            <h1>Welcome!</h1>
            <UseId />
            <UseDebugValue />
            <UseDefferedValue />
        </div>
    );
}

/* 
Imagine you’re decorating a room before guests arrive.
useInsertionEffect puts up the wallpaper before anyone sees it.
useLayoutEffect arranges the furniture right after the wallpaper’s up.
useEffect tweaks stuff after everyone’s walked in.
*/