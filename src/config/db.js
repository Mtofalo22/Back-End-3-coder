import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URL;
        const connection = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a MongoDB establecida con éxito:', connection.connection.name);
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};