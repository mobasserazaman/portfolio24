import Skill from "./Skill"
import WrapperComponent from "./WrapperComponent"
export default function Skills(){
    return <WrapperComponent title="Skills">
        <Skill title="Programming Languages" list={'JavaScript, Java, HTML, CSS, Python, C, C++, TypeScript, C#, SQL, PHP, OCaml'}></Skill>
        <Skill title="Operating Systems" list={'Linux, MacOS, Windows OS'}></Skill>
        <Skill title="Behavioural" list={'Teamwork, Adaptability, Problem-solving, Leadership, Time management'}></Skill>
        <Skill title="Development Tools" list={'Visual Studio Code, Eclipse, Sublime Text'}></Skill>
        <Skill title="Web Frameworks and Libraries" list={'ReactJS, Bootstrap, Tailwind CSS, Django'}></Skill>
        <Skill title="Version Control" list={'GitHub'}></Skill>
    </WrapperComponent>
}