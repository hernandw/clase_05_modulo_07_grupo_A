
import Category from './Category.js'
import Course from './Course.js'

//Relacion de 1 a muchos
//Una categoria tiene muchos cursos

Category.hasMany(Course, {foreignKey: "categoryId"})

//Un curso pertenece a una sola categoria
Course.belongsTo(Category, {foreignKey: "categoryId"})

export {Course, Category}