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
   
    res.redirect("/");
  } catch (error) {
    console.error("Error al crear categoria:", error);
    res.status(500).send("Error al guardar categoria");
  }
};

//5. Eliminar los cursos

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.destroy({ where: { id } });
    res.redirect("/");
  } catch (error) {
    console.error("Error al eliminar", error);
    res.status(500).send("Error al borrar curso");
  }
};

//6. Mostrar el formulario de editar el curso

const getEditCourseForm = async (req, res) => {
  try {
    const { id } = req.params;
    //buscar el curso a editar
    const course = await Course.findByPk(id, { raw: true });
    if (!course) {
      res.render("error", {
        message: "No existe",
      });
    }
    const categories = await Category.findAll({ raw: true });

    res.render("editForm", {
      categories,
      course,
    });
  } catch (error) {
    console.error("error al editar el curso", error);
    res.status(500).send("Error Interno");
  }
};

//7. Guardar los datos actualizados en la BBDD

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, categoryId } = req.body;
    await Course.update(
      { title, description, price, categoryId },
      { where: { id } },
    );
    res.redirect("/");
  } catch (error) {
    console.error("Error al actualizar: ", error);
    res.status(500).send("Error al actualizar el curso");
  }
};

export {
  home,
  getCreateCategoryForm,
  createCategory,
  getCreateCourseForm,
  createCourse,
  deleteCourse,
  getEditCourseForm,
  updateCourse
};
