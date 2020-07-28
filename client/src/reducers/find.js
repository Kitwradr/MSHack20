const valid = ['shop', 'recreation', 'eat']

const findReducer = (
	state = {
		category: "Shop",
		redirect: false,
	}, action) => {

	switch (action.type) {

		case "SET_CATEGORY": {
			if (valid.indexOf(action.category.toLowerCase()) + 1) {
				state = { ...state, category: action.category }
			}
			else {
				state = { ...state, redirect: true }
			}
			return state
		}

		default: {
			return state
		}
	}
}

export default findReducer