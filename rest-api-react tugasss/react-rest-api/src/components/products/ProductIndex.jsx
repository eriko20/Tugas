import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const ProductIndex = () => {
  const { products, getProducts, deleteProduct, getOrders} = useContext(SkillContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="mt-12">
      <div className="m-2 flex justify-end p-2">
        <Link
          to="/products/create"
          className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700"
        >
          New Product
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                category
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((Product) => {
              console.log(Product);
              return (
                <tr
                  key={Product.id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4">{Product.title}</td>
                  <td className="px-6 py-4">{Product.description}</td>
                  <td className="px-6 py-4">{Product.categories}</td>
                  <td className="px-6 py-4">{Product.price}</td>
                  <td className="space-x-2 px-6 py-4">
                    <Link
                      to={`/products/${Product.id}/edit`}
                      className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduct(Product.id)}
                      className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => getOrders(Product.id)}
                      className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Checkout
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};