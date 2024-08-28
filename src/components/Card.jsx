export default function Card({label, num, text}){
    return <div className="m-4 hover:-rotate-6 transition-all duration-500">
        <div className="bg-orange-100 py-10 w-[350px] h-[350px] rounded-2xl hover:bg-orange-200">
<div className="w-full flex justify-center">
    <h1 className=" bg-orange-500 w-10 h-10  flex items-center justify-center rounded-[50%] text-xl font-bold">{num}</h1>

</div>
            <h2 className="text-2xl uppercase font-bold mt-4 border-t-2 p-2 border-orange-700 ">{label}</h2>
            <p className="p-2">{text}</p>
        </div>
    </div>

}