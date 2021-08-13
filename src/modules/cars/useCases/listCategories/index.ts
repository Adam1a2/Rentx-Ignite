import { CategoriesRepository } from "../../infra/typeorm/repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const ListCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  ListCategoriesUseCase
);

export { listCategoriesController };
