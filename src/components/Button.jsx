export default function Button({onSelect,name,children}){
    console.log(name)
    return <button onClick={() => onSelect(name)} className="w-2/3 my-4 py-2 rounded-md text-stone-500 hover:bg-pink-200 hover:text-slate-800">{children}</button>
}