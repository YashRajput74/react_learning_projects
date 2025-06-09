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