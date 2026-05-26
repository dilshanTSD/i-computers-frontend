export default function ProductCard(props){

    console.log(props)

 return(

<div className="w-72 bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col gap-3 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-gray-100">
    
    <img 
        src={props.img} 
        alt={props.name} 
        className="w-full h-48 object-cover rounded-lg"
    />

    <h1 className="text-lg font-semibold text-gray-800 mt-2">
        {props.name}
    </h1>

    <p className="text-xl font-bold text-emerald-600">
        {props.Price}.00 LKR
    </p>
    
</div>

 )  
    
}