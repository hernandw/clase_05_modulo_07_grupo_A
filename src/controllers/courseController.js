import { Course, Category } from "../models/index.js";

const home = async (req, res) => {
  try {
    const courses = await Course.findAll({ raw: true });
    
    res.render("home", {
      courses,
    });
  } catch (error) {
    console.log("Error al conectarse con el home", error);
  }
};

//1. Crear un formulario para los categorias

const getCreateCategoryForm = async (req, res) => {
  try {
    res.render("formCategory");
  } catch (error) {
    console.error("Error al cargar formulario:", error);
    res.status(500).send("Error interno");
  }
};

//2. Guardar la Categoria
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const categoria = await Category.create({ name });

    res.redirect("/create-course");
  } catch (error) {
    console.error("Error al crear categoria:", error);
    res.status(500).send("Error al guardar categoria");
  }
};

//3. crear un formulario para los cursos

const getCreateCourseForm = async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    res.render("formCourse", {
      categories,
    });
  } catch (error) {
    console.error("Error al cargar formulario:", error);
    res.status(500).send("Error interno");
  }
};
//4. Guardar el curso
const createCourse = async (req, res) => {
  try {
    const { title, description, price, categoryId } = req.body;
    const course = await Course.create({
      title,
      description,
      price,
      categoryId,
    });
    console.log(course);
    res.redirect("/");
  } catch (error) {
    console.error("Error al crear categoria:", error);
    res.status(500).send("Error al guardar categoria");
  }
};

export {
  home,
  getCreateCategoryForm,
  createCategory,
  getCreateCourseForm,
  createCourse,
};
