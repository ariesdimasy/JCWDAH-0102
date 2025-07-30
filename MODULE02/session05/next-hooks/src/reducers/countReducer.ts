interface ICountState {
    count: number;
}

interface ICountAction {
    type: string;
    payload: number;
}

function countReducer(state: ICountState, action: ICountAction) {
    if (action.type === "increment") {
        return { count: state.count + action.payload };
    } else if (action.type == "decrement") {
        return { count: state.count - action.payload };
    } else {
        return state;
    }
}

export default countReducer