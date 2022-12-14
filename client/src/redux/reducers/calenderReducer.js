import moment from "moment";
import ACTIONS from "../actions/actionsConstants/CalendarActionsConstants";

const initialState = {
    month: moment().month(),
    year: moment().year(),
    events: []
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.INCREMENT: {
            if(state.month === 11)
                return {  
                    year: state.year + 1,
                    month: 0
                }
            return { 
                ...state, 
                month: state.month + 1 
            };
        }
        case ACTIONS.DECREMENT: {
            if(state.month !== 0)
                return { 
                    ...state, 
                    month: state.month - 1 
                };
            return { 
                year: state.year - 1, 
                month: 11 
            };
        }
        case ACTIONS.GET_EVENTS: {
            return { ...state, events: payload };
        }
        case ACTIONS.ADD_EVENT: {
            return { ...state, events: [ ...state.events, {
                Date: payload
            }]};
        }
        case ACTIONS.DELETE_EVENT: {
            return { ...state, 
                events: state.events.filter(event => event.id !== payload)
            };
        }
        case ACTIONS.GET_EVENT: {
            const find_event = state.events.find(event => event.id === payload.id);
            const event_with_info = { ...find_event, ...payload.info };
            const events_reduced = state.events.filter(event => event.id !== payload.id);
            return { ...state, events: [ ...events_reduced, event_with_info ] };
        }
        default: {
            return state;
        }
    }
}

export default reducer;