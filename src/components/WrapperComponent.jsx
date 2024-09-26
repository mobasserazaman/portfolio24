export default function WrapperComponent({title, children}){
    return <div className="py-16 px-16">
        <h1 className="text-2xl font-bold mb-8 mt-8">{title}</h1>
        {children}
    </div>
}