export default function Project({title, description, year}){
    return <div>
        <h1 className="text-xl mb-1 mt-4">{title}</h1>
        <p>{year}</p>
        <p className="py-4">{description}</p>
    </div>
}