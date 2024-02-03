export default function Project({title, description, year}){
    return <div className=" text-stone-500 pb-6">
        <h1 className="text-xl">{title}</h1>
        <p>{year}</p>
        <p className="py-3">{description}</p>
    </div>
}