export default function shoppingListItemReducer(
	state = {items: []},
	action
){
	console.log(action);
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current State', state.items.length);
			console.log('Updating State', state.items.length + 1);
			return Object.assign({}, state, {
				items: state.items.concat(state.items.length + 1)
			});

		default:
			console.log('Init State', state.items.length);
			return state;
	}
}