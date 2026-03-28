import {Course, Category} from '../models/index.js'

const home  = (req, res)=>{
    try {

      
        
        res.render('home',{
            pageTitle: 'Inicio',
            isExito: true,
            
        })
    } catch (error) {
        console.log('Error al conectarse con el home', error)
    }
}

export {
    home
}