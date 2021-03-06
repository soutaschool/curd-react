import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
// reducerに対して渡す
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

//urlを定義(共通のURL)
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// dispatchを受け取るようにする
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // 関数の中でdispatchをすることができるようになる
    dispatch({ type: READ_EVENTS, response })
}
// values でtitleとbodyを受け取る
export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({ type: CREATE_EVENT, response })
}

export const putEvent = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
    dispatch({ type: UPDATE_EVENT, response })
}

// イベントを削除
export const deleteEvent = id => async dispatch => {
    //IDを判別のするのでevents/:idとなる
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENT, id })
}

// イベントの取得
export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: READ_EVENT, response})
}
