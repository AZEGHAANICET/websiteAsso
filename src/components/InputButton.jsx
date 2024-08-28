export default function InputButton({text}){

    return <form className="flex flex-col">
        <input type="email" className="py-2 outline-none text-black rounded-2xl mb-4" />
        <button type="submit" className="px-4 py-3 bg-orange-600 rounded-3xl font-bold">{text}</button>
    </form>


}