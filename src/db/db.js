import mongoose from 'mongoose';

const DbConnection = async () => {
    return await mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("Conexion exitosa");
        })
        .catch((err) => {
            console.log("Error de conexión: ", err);
        })
}

export {DbConnection};