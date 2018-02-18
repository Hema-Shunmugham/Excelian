const TOGGLE = 'TOGGLE';

export function handleDrawerToggle(show){
    return {
        type: TOGGLE,
        show
    }
}

const initState = {
    mobileOpen: true,
};

export default function reducer(state = initState, action){
    switch (action.type){
        case TOGGLE:
            return {...state, mobileOpen: action.show}
        default:
            return state;
    }
}
