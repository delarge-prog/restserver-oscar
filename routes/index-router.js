const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/index-controller');
const login = require('../controllers/login-controller');
const { verificarToken, verificarUser } = require('../server/middlewares/autenticacion');

router.get('/', userControllers.getApp);
router.get('/usuarios', verificarToken, userControllers.getUser);
router.post('/usuarios', [verificarToken, verificarUser], userControllers.postUser);
router.put('/usuarios/:id', [verificarToken, verificarUser], userControllers.putUser);
router.delete('/usuarios/:id', [verificarToken, verificarUser], userControllers.deleteUser);
router.post('/login', login.useRouter);

// router.get('/usuarios', verificarToken, (req, res) => {
//     return res.json({
//         _usuario: req.usuario,
//         _nombre: req.usuario.nombre,
//         _email: req.usuario.email

//     });
// });
module.exports = router;