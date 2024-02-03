import Skill from "./Skill"
export default function Skills(){
    return <div className="py-16 px-16">
        <Skill title="Programming Languages" list={'JavaScript, Java, HTML, CSS, Python, C, C++, TypeScript, C#, SQL, PHP, OCaml'}></Skill>
        <Skill title="Operating Systems" list={'Linux, MacOS, Windows OS'}></Skill>
        <Skill title="Behavioural" list={'Teamwork, Adaptability, Problem-solving, Leadership, Time management'}></Skill>
    </div>
}