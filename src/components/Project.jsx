export default function Project({ title, description, year }) {
    return <div style={{whiteSpace: "pre-wrap"}}>
        <h1 className="text-xl mb-1 mt-4">{title}</h1>
        <p>{year}</p>
        <p style={{marginTop: '15px', marginBottom: '15px'}}>{description}</p>
    </div>
}