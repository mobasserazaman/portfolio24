import Project from "./Project";
import { myprojects } from "./data";
import WrapperComponent from "./WrapperComponent"

export default function Projects() {
    return <WrapperComponent title="Projects">
                <p className="my-4">
            GitHub : <a className="hover:text-pink-500"  href="https://github.com/mobasserazaman" target="_blank">https://github.com/mobasserazaman</a>
        </p>
        {myprojects.map(project => <Project title={project.title} description={project.description} year={project.year}/>)}
    </WrapperComponent>
}