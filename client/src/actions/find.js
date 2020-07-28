import store from '../stores'

const setCategory = (category)=>{
    return store.dispatch({
        type: "SET_CATEGORY",
        category
    })
}

const find = {
	setCategory,
}

export default find