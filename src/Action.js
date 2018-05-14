export const UPDATE="Update";
export const DELETE="Delete";

export const updatetext = (textData) => {
    return {
        type: UPDATE,
        text: textData
    }
}

export const deletetext=()=>{
    return{
        type:  DELETE
    }
}
