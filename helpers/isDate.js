import moment from "moment";

export const isDate = (value, rest) => {

    if(!value){
        return false
    }

    if(isNaN(Date.parse(value))){
        return false
    }else{
        return true
    }

    // const fecha = moment(value);

    // if(fecha.isValid()){
    //     return true
    // }else{
    //     return false
    // }

}