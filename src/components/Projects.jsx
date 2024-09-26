import Project from "./Project";
import { myprojects } from "./data";
import WrapperComponent from "./WrapperComponent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Projects() {
    return <WrapperComponent title="Projects">
        <p>
        <FontAwesomeIcon icon={faGithub} /><a className="hover:text-pink-500"  href="https://github.com/mobasserazaman" target="_blank"> https://github.com/mobasserazaman</a>
        </p>
        {myprojects.map((project, index) => <Project key={index} title={project.title} description={project.description} year={project.year} keywords={project.keywords}/>)}
    </WrapperComponent>
}