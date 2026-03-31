import express from "express";
import {
  home,
  getCreateCategoryForm,
  createCategory,
  getCreateCourseForm,
  createCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", home);

router.get("/create-category", getCreateCategoryForm); //ruta para mostrar formulario de categoria
router.post("/create-category", createCategory); // ruta para guardar los datos del formulario de categorias

router.get("/create-course", getCreateCourseForm); //mostrar el formulario de crear cursos
router.post('/create-course', createCourse) // guardar los cursos en la BBDD

export default router;
