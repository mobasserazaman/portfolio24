import { aboutMe } from "./data"
import WrapperComponent from "./WrapperComponent"
export default function About(){
    return <WrapperComponent title='About'><p className="whitespace-pre-line">{aboutMe}</p></WrapperComponent>
}