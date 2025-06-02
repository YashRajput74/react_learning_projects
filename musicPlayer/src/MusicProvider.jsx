import { createContext, useContext, useReducer } from "react";

const MusicContext = createContext();

const initialMusic={
    currentSong: null,
    queue:[]
}

export default function MusicProvider({children}) {
    const [music, dispatch] = useReducer(playerReducer, initialMusic);

    return(
        <MusicContext.Provider value={{music,dispatch}}>
            {children}
        </MusicContext.Provider>
    )
}

export function usePlayer(){
    return useContext(MusicContext);
}

function playerReducer(state,action){
    switch (action.type){
        case 'playSong':
            return {
                ...state,
                currentSong:action.payload
            }
        case 'addToQueue':
            return {
                ...state,
                queue: [...state.queue,action.payload]
            }
        default:
            return state
    }    
}