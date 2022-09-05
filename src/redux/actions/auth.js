export const setUserDetails = (api_data)=> (dispatch, getState) =>{
    return new Promise(resolve => {
        dispatch({
            type:'SET_AUTH_TOKEN',
            payload:{
                token:"secret_token"
            }
        });
        resolve(null)
    })
};

export const setUserToken = (api_data)=> (dispatch, getState) =>{
    return new Promise(resolve => {
        dispatch({
            type:'SET_AUTH_TOKEN',
            payload:{
                token:"secret_token"
            }
        });
        resolve(null)
    })
};