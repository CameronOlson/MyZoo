import { ZooController } from "./controllers/ZooController.js"

var zooController = new ZooController()


console.log('is this thing on')

window['app']={
    controllers:{
        zooController
    }
}





