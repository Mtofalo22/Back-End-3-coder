import petModel from "./models/Pet.js";

export default class Pet {

    get = (params) =>{
        return petModel.find(params)
    }

    getBy = (params) =>{
        return petModel.findOne(params);
    }

    save = (doc) =>{
        return petModel.create(doc);
    }

    update = (id,doc) =>{
        return petModel.updateOne({_id: id}, {...doc})
    }

    delete = (id) =>{
        return petModel.findByIdAndDelete(id);
    }

    insertMany = (petList)=>{
        return petModel.insertMany(petList);
    }
}