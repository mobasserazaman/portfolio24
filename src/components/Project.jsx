export default function Project({ title, description, year, keywords }) {
    return <div style={{whiteSpace: "pre-wrap", borderTop: '1px solid gray', padding: '25px 0'}}>
        <h1 className="text-xl mb-1 mt-4">{title}</h1>
        <p>{year}</p>
        <p style={{marginTop: '15px', marginBottom: '15px'}}>{description}</p>
        <ul className="keywords">{keywords.map((word, index) => <li key={index}>{word}</li>)}</ul>
    </div>
}