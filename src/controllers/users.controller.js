import { usersService } from "../services/index.js"

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}
const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password, role } = req.body;

        if (!first_name || !last_name || !email || !password) {
            return res.status(400).send({
                status: "error",
                error: "Todos los campos requeridos deben ser completados"
            });
        }

        const existingUser = await usersService.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).send({
                status: "error",
                error: "El correo electrónico ya está registrado"
            });
        }

        const hashedPassword = await createHash(password);
        const newUser = {
            first_name,
            last_name,
            email,
            password: hashedPassword,
            role: role || "user",
            pets: []
        };

        const createdUser = await usersService.create(newUser);

        res.status(201).send({
            status: "success",
            message: "Usuario creado exitosamente",
            payload: createdUser
        });
    } catch (error) {
        console.error("Error creando usuario:", error);
        res.status(500).send({
            status: "error",
            error: "Error interno del servidor"
        });
    }
};

export default {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser
};