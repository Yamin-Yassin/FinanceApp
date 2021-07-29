enum ActionType {
  Add = 'add',
  Remove = 'remove',
}

interface AddAction {
  type: ActionType.Add;
  payload: number;
}

interface RemoveAction {
  type: ActionType.Remove;
  payload: number;
}

type Action = AddAction | RemoveAction;

const initState = {
  balance: 1000,
};

const transactionReducer = (action: Action, state = initState) => {
  switch (action.type) {
    case ActionType.Add:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case ActionType.Remove:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
