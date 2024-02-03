import logo from '..'
import Button from './Button'
export default function Sidebar({ onSelect }) {
    return <aside className="w-1/4 bg-black rounded-r-xl">
        <img src="" className="bg-slate-100"></img>
        <div className="flex-col text-center">
            <Button onSelect={onSelect} name='Profile'>Profile</Button>
            <Button onSelect={onSelect} name='About'>About</Button>
            <Button onSelect={onSelect} name='Skills'>Skills</Button>
            <Button onSelect={onSelect} name='Experience'>Experience</Button>
            <Button onSelect={onSelect} name='Projects'>Projects</Button>
            <Button onSelect={onSelect} name='Contact'>Contact</Button>
            <Button onSelect={onSelect} name='Downloads'>Downloads</Button>
        </div>

    </aside>
}