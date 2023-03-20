import { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";
import { useParams } from "react-router-dom";

export const PelangganEdit = () => {
  const {
    formValues,
    onChange,
    errors,
    setErrors,
    pelanggan,
    getPelanggan,
    updatePelanggan,
  } = useContext(SkillContext);
  let { id } = useParams();

  useEffect(() => {
    getPelanggan(id);
    setErrors({});
  }, []);

  return (
    <div className="mt-12">
      <form
        onSubmit={updatePelanggan}
        className="mx-auto max-w-md rounded-sm bg-white p-4 shadow-md"
      >
      <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="pelanggan" className="black mb-2 text-sm font-medium">
              pelanggan
            </label>
            <input
              name="pelanggan"
              value={formValues["pelanggan"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.pelanggan && (
              <span className="text-sm text-red-400">{errors.pelanggan[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="alamat" className="black mb-2 text-sm font-medium">
              alamat
            </label>
            <input
              name="alamat"
              value={formValues["alamat"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.alamat && (
              <span className="text-sm text-red-400">{errors.alamat[0]}</span>
            )}
          </div>
        </div>

        <div className="mb-4">
            <label htmlFor="telp" className="black mb-2 text-sm font-medium">
              category
            </label>
            <input
              name="telp"
              value={formValues["telp"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.telp && (
              <span className="text-sm text-red-400">{errors.telp[0]}</span>
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
