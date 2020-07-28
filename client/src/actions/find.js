import store from '../stores'

const setCategory = (category)=>{
    return store.dispatch({
        type: "SET_CATEGORY",
        category
    })
}

const setUserLocation = (userLocation)=>{
	return store.dispatch({
        type: "SET_USER_LOCATION",
        userLocation
    })
} 

const addPin = (pin)=>{
	return store.dispatch({
        type: "ADD_PIN",
        pin
    })
}

const removePins = ()=>{
	return store.dispatch({
		type: "REMOVE_PINS"
	})
}

const find = {
	setCategory,
	setUserLocation,
	addPin,
	removePins
}

export default find