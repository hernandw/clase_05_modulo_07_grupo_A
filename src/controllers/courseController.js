

const home  = (req, res)=>{
    try {

        const courses = [
            {
                id: 5,
                title:  "JS",
                description: 'Buen curso',
                price: 10
            }]
            
        
        res.render('home',{
            pageTitle: 'Inicio',
            isExito: true,
            courses
        })
    } catch (error) {
        console.log('Error al conectarse con el home', error)
    }
}

export {
    home
}