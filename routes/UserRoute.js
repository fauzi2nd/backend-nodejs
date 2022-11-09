import express from "express";
import { 
    getUser,
    getUserById,
    createUserById,
    updateUserById,
    deleteUserById
 } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.post('/users', createUserById);
router.patch('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

export default router;