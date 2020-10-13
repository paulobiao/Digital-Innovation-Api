const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    const { cliente: MongoClient, closetConnectionFn} = await createMongoClient();
    const Produts = MongoClient.collection('products');
    const res = await Produts.find({});
    const body = await res.toArray();    

    context.res = {

        status: 200,

        body,
    };
};
