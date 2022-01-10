import moment from "moment";

// TENGO QUE VER 7. GRABAR EL EVENTO EN LA BASE DATOS Y CORREGIR COMO ESTA TOMANDO LA FECHA CON MOMENT

export const isDate = (value, rest) => {

    try {
        if (!value) {
            return false
        }

        const fecha = moment(value)

        if (fecha.isValid) {
            console.log("Fecha valida \n\n\n")
        } else {
            console.log("Fecha invalida \n\n\n")
        }
    } catch (error) {
        return false;
    }
}