import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [altNames, setAltNames] = useState([]); // නම් කිහිපයක් තිබිය හැකි නිසා Array එකක් ගත්තා
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]); // Images list එකක් නිසා Array එකක් ගත්තා
  const [price, setPrice] = useState(0); // Number
  const [labelledPrice, setLabelledPrice] = useState(0); // Number
  const [stock, setStock] = useState(0); // Number
  const [isAvailable, setIsAvailable] = useState(true); // True හෝ False නිසා Boolean එකක් ගත්තා
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const navigate = useNavigate();

  async function handleSave() {
    const token = localStorage.getItem("token");
    if (token == null) {
      toast.error("You are not logeed in !...");
      navigate("/login");
      return;
    }
    try {
      const imageUploadPromises = [];
      for (let i = 0; i < images.length; i++) {
        imageUploadPromises[i] = uploadMedia(images[i]);
      }
      console.log(imageUploadPromises);
      const result = await Promise.all(imageUploadPromises);
    } catch (err) {
      console.log(err);
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="w-full h-full flex p-1 flex-col gap-3">
      <div className="w-full h-[100px] bg-white shadow-md rounded-md flex p-4 flex-col">
        <h1 className="text-2xl font-semibold text-secondary">Add Product</h1>
        <p className="text-sm text-gray-500">
          Fill in the sections below to add a new product to your store
          inventory.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full bg-white shadow-md rounded-md p-6 overflow-y-auto">
        {/* Product ID */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Product ID
          </label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="e.g. PRD-1024"
          />
        </div>

        {/* Product Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="e.g. Asus Zenbook 14"
          />
        </div>

        {/* Alternative Names */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Alternative Names
          </label>
          <input
            type="text"
            value={altNames.join(", ")}
            onChange={(e) =>
              setAltNames(e.target.value.split(",").map((item) => item.trim()))
            }
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="Name 1, Name 2"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2 lg:col-span-3">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Description
          </label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="Enter detailed product description here..."
          />
        </div>

        {/* Upload Images */}
        <div className="flex flex-col md:col-span-2 lg:col-span-3 ">
          <label className="text-gray-700 text-sm font-semibold mb-2 ">
            Upload Images
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                // තෝරාගත් ෆයිල්ස් ටික Array එකක් බවට පත් කරලා State එකට දානවා
                const selectedFiles = Array.from(e.target.files);
                setImages(selectedFiles);
              }
            }}
            className="w-full text-sm text-gray-500 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 focus:outline-none transition-all"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            value={price || ""}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="0.00"
          />
        </div>

        {/* Labelled Price */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Labelled Price
          </label>
          <input
            type="number"
            value={labelledPrice || ""}
            onChange={(e) => setLabelledPrice(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="0.00"
          />
        </div>

        {/* Stock */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Stock Count
          </label>
          <input
            type="number"
            value={stock || ""}
            onChange={(e) => setStock(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="0"
          />
        </div>

        {/* Is Available */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Availability Status
          </label>
          <select
            value={isAvailable}
            onChange={(e) => setIsAvailable(e.target.value === "true")}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white"
          >
            <option value="true">In Stock / Available</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a category</option>
            <option value="Laptop">Laptop</option>
            <option value="Desktop">Desktop</option>
            <option value="Mouse">Mouse</option>
            <option value="Monitor">Monitor</option>
            <option value="Graphic Card">Graphic Card</option>
            <option value="Processor">Processor</option>
            <option value="Motherboard">Motherboard</option>
            <option value="Power Supply">Power Supply</option>
            <option value="RAM">RAM</option>
          </select>
        </div>

        {/* Brand */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Brand
          </label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="e.g. ASUS"
          />
        </div>

        {/* Model */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">
            Model
          </label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            placeholder="e.g. UX3402"
          />
        </div>
      </div>
      {/* Form Action Buttons */}
      <div>
        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end gap-3">
          <Link
            to="/admin/products"
            className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
          >
            Back
          </Link>
          <button
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium shadow-sm transition-all"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

//
//
//
// productid
// name
// altNames
// description
// images
// price
// labelledPrice
// stock
// isAvailable
// category
// brand
// model
