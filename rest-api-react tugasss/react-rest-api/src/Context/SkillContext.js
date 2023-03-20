import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
  name: "",
  slug: "",

  title: "",
  description: "",
  categories: "",
  price: "",
  
  pelanggan: "",
  alamat: "",
  telp: "",

  idbarang: "",
  jumlah: "",
  harga: "",
  barang: "",
  idpelanggan: "",
};

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  const [pelanggan, setPelanggan] = useState([]);
  const [pelanggans, setPelanggans] = useState([]);
  
  const [order, setOrder] = useState([]);
  const [orders, setOrders] = useState([]);


  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  

    // --------------------------------------------------- Skills -------------------------------------------------------------

  const getSkills = async () => {
    const apiSkills = await axios.get("skills");
    setSkills(apiSkills.data.data);
  };

  const getSkill = async (id) => {
    const respoonse = await axios.get("skills/" + id);
    const apiSkill = respoonse.data.data;
    setSkill(apiSkill);
    setFormValues({
      name: apiSkill.name,
      slug: apiSkill.slug
    })
  }

  const storeSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.post("skills", formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }

  const updateSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.put("skills/" + skill.id, formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status.data === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteSkill = async (id) => {
    if (!window.confirm("Yakin Mas se?")) {
      return;
    }
    await axios.delete("skills/" + id);
    getSkills();
  }

    ///////////////////////////////////////////////// Untuk product  /////////////////////////////////////////////////////////////////

    const getProducts = async () => {
      const apiProduct = await axios.get("products")
      setProducts(apiProduct.data.data)
    };

  const getProduct = async (id) => {
    const respoonse = await axios.get("products/" + id);
    const apiProduct = respoonse.data.data;
    setProduct(apiProduct);
    setFormValues({
      title: apiProduct.title,
      description: apiProduct.description,
      categories: apiProduct.categories,
      price: apiProduct.price,
    })
  }

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put("products/" + product.id, formValues);
      setFormValues(initialForm);
      navigate("/products");
    } catch (e) {
      if (e.response.status.data === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const storeProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("products", formValues);
      setFormValues(initialForm);
      navigate("/products");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }

  const deleteProduct = async (id) => {
    if (!window.confirm("Yakin Mas se?")) {
      return;
    }
    await axios.delete("products/" + id);
    getProducts();
  }

  ///////////////////////////////////////////////// Untuk Pelanggan  /////////////////////////////////////////////////////////////////

  const getPelanggans = async () => {
    const apiPelanggan = await axios.get("pelanggan")
    setPelanggans(apiPelanggan.data.data)
  };

const getPelanggan = async (id) => {
  const respoonse = await axios.get("pelanggan/" + id);
  const apiPelanggan = respoonse.data.data;
  setPelanggan(apiPelanggan);
  setFormValues({
    pelanggan: apiPelanggan.pelanggan,
    alamat: apiPelanggan.alamat,
    telp: apiPelanggan.telp
  })
}

const updatePelanggan = async (e) => {
  e.preventDefault();
  try {
    await axios.put("pelanggan/" + pelanggan.id, formValues);
    setFormValues(initialForm);
    navigate("/pelanggans");
  } catch (e) {
    if (e.response.status.data === 422) {
      setErrors(e.response.data.errors);
    }
  }
};

const storePelanggan = async (e) => {
  e.preventDefault();
  try {
    await axios.post("pelanggan", formValues);
    setFormValues(initialForm);
    navigate("/pelanggans");
  } catch (e) {
    if (e.response.status === 422) {
      setErrors(e.response.data.errors);
    }
  }
}

const deletePelanggan = async (id) => {
  if (!window.confirm("Yakin Mas se?")) {
    return;
  }
  await axios.delete("pelanggan/" + id);
  getPelanggans();
}

///////////////////////////////////////////////// Untuk Orders  /////////////////////////////////////////////////////////////////

const getOrders = async (id) => {
  const respoonse = await axios.get("products/" + id)
  const apiProduct = respoonse.data.data;
  setOrders(apiProduct);
}

const getOrder = async (id) => {
  const respoonse = await axios.get("pelanggan/" + id)
  const apiPelanggan = respoonse.data.data;
  setOrder(apiPelanggan);
}

  return <SkillContext.Provider value={{ skill, skills, getSkill, getSkills, onChange, formValues, storeSkill, errors, setErrors, updateSkill, deleteSkill, getProducts,  product, setProduct, products, setProducts, getProduct, updateProduct, storeProduct, deleteProduct, pelanggan, setPelanggan, pelanggans, setPelanggans, getPelanggan, getPelanggans, storePelanggan, updatePelanggan, deletePelanggan, order, setOrder, orders, setOrders, getOrders, getOrder}}>{children}</SkillContext.Provider>
}

export default SkillContext;