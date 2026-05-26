import { IoCartOutline } from "react-icons/io5";
export default function ProductCard(props){

    console.log(props)

 return(

<div className="w-72 bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-gray-100">
    {/* Product Image */}
    <img 
        src={props.img} 
        alt={props.name} 
        className="w-full h-48 object-cover rounded-xl"
    />
    
    {/* Product Name */}
    <h1 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-2">
        {props.name}
    </h1>
    
    {/* Footer: Price & Icon Button */}
    <div className="flex items-center justify-between mt-auto pt-2">
        <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Price</span>
            <p className="text-xl font-bold text-emerald-600">
                LKR {props.Price}
            </p>
        </div>
        
        {/* Shopping Cart Button */}
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl transition-colors duration-200 shadow-sm shadow-emerald-200">
            <IoCartOutline size={22} />
        </button>
    </div>
</div>

 )  
    
}