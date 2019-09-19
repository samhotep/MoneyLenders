import { combineReducers } from 'redux';

const InitialState = {
	loginStatus: 'false',
	loginUser: ''
}

function loginReducer(state = InitialState, action){
	switch(action.type) {
		case "LOGIN":
			var lI = state.loginStatus;
			var lU = action.payload;
			if (lI == 'false'){
				lI = 'true';
			}
			else {
				lI = 'false';
				lU = ' ';
			}
			return Object.assign({}, state, {
				loginStatus: lI,
				loginUser: lU,
			});
			break;
		default: 
			return state;
	}	
}

export default combineReducers({
	login: loginReducer,
});