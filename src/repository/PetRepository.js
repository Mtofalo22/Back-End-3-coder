import GenericRepository from "./GenericRepository.js";

export default class PetRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }
    insertManyPets = (petslist) =>{
        return this.insertMany(petslist)
    }  
}