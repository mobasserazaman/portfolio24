export default function Button({onSelect,name,children}){
    console.log(name)
    return <button onClick={() => onSelect(name)} className="py-4 hover:bg-white">{children}</button>
}