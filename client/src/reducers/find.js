const valid = ['shop', 'recreation', 'eat']

const findReducer = (
	state = {
		category: "Shop",
		redirect: false,
		userLocation: undefined,
		pins: [],
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

		case "SET_USER_LOCATION": {
			state = { ...state, userLocation: action.userLocation }
			return state
		}

		case "ADD_PIN": {
			var pins = [...state.pins]
			pins.push(action.pin)
			state = { ...state, pins: pins }
			return state
		}

		case "REMOVE_PINS": {
			state = { ...state, pins: [] }
			return state
		}

		default: {
			return state
		}
	}
}

export default findReducer