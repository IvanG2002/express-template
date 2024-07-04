import { UserSchemaLogin as userLoginValidate } from "../schemas/user.schema.js"

class authController {
    // trabajar con los servicios
    loginController = (req, res) => {
        // 1. Validar datos de entrada
        const err = userLoginValidate.parse(req.body)
        if (err) return res.status(500).json({ message: "Error on server" })
        // 2. Enviar al servicio de login

        // 3. responer con token de autorizacion

    }
    registerContrller = (req, res) => {
        // 1. Validar datos de entrada

        // 2. Enviar al servicio de registro

        // 3. responder con id de creacion de usuario

    }
}
export default new authController();