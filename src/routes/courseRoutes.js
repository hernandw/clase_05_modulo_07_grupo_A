import express from "express";
import {
  home,
  getCreateCategoryForm,
  createCategory,
  getCreateCourseForm,
  createCourse,
  deleteCourse,
  getEditCourseForm,
  updateCourse
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", home);

router.get("/create-category", getCreateCategoryForm); //ruta para mostrar formulario de categoria
router.post("/create-category", createCategory); // ruta para guardar los datos del formulario de categorias

router.get("/create-course", getCreateCourseForm); //mostrar el formulario de crear cursos
router.post('/create-course', createCourse) // guardar los cursos en la BBDD


router.post('/eliminar/:id', deleteCourse) //Eliminar un curso

router.get('/editar/:id', getEditCourseForm) //Mostrar el formulario de editar
router.post('/actualizar/:id', updateCourse) //Procesar los datos actualizados

export default router;
