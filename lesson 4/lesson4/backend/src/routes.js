const express = require('express')
const multer = require('multer')


const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const uploadConfig = require('./config/upload')
const LoginController = require('./controllers/LoginController')
const DashboardController = require('./controllers/DashboardController')
const RegistrationController = require('./controllers/RegistrationController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/status', (req, res) => {
    res.send({ status: 200 })
})


//Event
routes.get('/event/:eventId', EventController.getEventById)
routes.post('/event', upload.single("thumbnail"), EventController.createEvent)


//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

//login
routes.post('/loginAuth',LoginController.store)


//Dashboard
routes.get('/eventCheck/:eventId',DashboardController.eventCheck)
routes.get('/dashboard/:sport', DashboardController.getAllEvents)
routes.get('/dashboard', DashboardController.getAllEvents)



//Registration
routes.post('/registration/:eventId',RegistrationController.create)
routes.get('/registration/:registrationId',RegistrationController.getRegistrationById)
routes.post('/registration/:registration_id/approvals', ApprovalController.approval)
routes.post('/registration/:registration_id/rejections', RejectionController.rejection)



module.exports = routes;