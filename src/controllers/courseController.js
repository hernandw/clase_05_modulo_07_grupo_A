

const home  = (req, res)=>{
    try {
        res.render('home',{
            pageTitle: 'Inicio'
        })
    } catch (error) {
        console.log('Error al conectarse con el home', error)
    }
}

export {
    home
}