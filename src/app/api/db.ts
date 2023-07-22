import mongoose from 'mongoose';

export async function connectDb() {
  if (mongoose.connection.readyState != 0) return;

  try {
    await mongoose.connect(process.env.URL_DB as string, {
      dbName: 'cripto-mining',
    });
    console.log('connectado no banco de dados');
  } catch (err) {
    console.error(err);
  }
}
