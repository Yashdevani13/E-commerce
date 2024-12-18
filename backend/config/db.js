import mongoose from 'mongoose';

export const connentDB = async () => {
    await mongoose.connect('mongodb://devaniyash813:AUpgsW7Prhcjfc2C@ac-afijbxz-shard-00-00.0j4ad0y.mongodb.net:27017,ac-afijbxz-shard-00-01.0j4ad0y.mongodb.net:27017,ac-afijbxz-shard-00-02.0j4ad0y.mongodb.net:27017/?replicaSet=atlas-w6ybc3-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log('DB Connected'))
}

