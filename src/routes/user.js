import {getAllUsers, createUser} from "../services/UsersService.js";

export default function (app) {
    app.get("/users", getAllUsers);
    app.post("/users", createUser);
    // router.get('/:id', userService.getUserById);
    // router.put('/:id', userService.updateUser);
    // router.delete('/:id', userService.deleteUser);
}