import { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";
import { useParams } from "react-router-dom";

export const ProductEdit = () => {
  const {
    formValues,
    onChange,
    errors,
    setErrors,
    product,
    getProduct,
    updateProduct,
  } = useContext(SkillContext);
  let { id } = useParams();

  useEffect(() => {
    getProduct(id);
    setErrors({});
  }, []);

  return (
    <div className="mt-12">
      <form
        onSubmit={updateProduct}
        className="mx-auto max-w-md rounded-sm bg-white p-4 shadow-md"
      >
      <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="title" className="black mb-2 text-sm font-medium">
              title
            </label>
            <input
              name="title"
              value={formValues["title"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.title && (
              <span className="text-sm text-red-400">{errors.title[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="black mb-2 text-sm font-medium">
              description
            </label>
            <input
              name="description"
              value={formValues["description"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.description && (
              <span className="text-sm text-red-400">{errors.description[0]}</span>
            )}
          </div>
        </div>

        <div className="mb-4">
            <label htmlFor="categories" className="black mb-2 text-sm font-medium">
              category
            </label>
            <input
              name="categories"
              value={formValues["categories"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.categories && (
              <span className="text-sm text-red-400">{errors.categories[0]}</span>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="price" className="black mb-2 text-sm font-medium">
              price
            </label>
            <input
              name="price"
              value={formValues["price"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.price && (
              <span className="text-sm text-red-400">{errors.price[0]}</span>
            )}
          </div>
        <div className="my-4">
          <button className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
