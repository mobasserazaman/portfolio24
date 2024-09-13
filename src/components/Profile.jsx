import myphoto from '../assets/pic.png'
import WrapperComponent from './WrapperComponent'
export default function Profile(){
    return <WrapperComponent>
        <img src={myphoto} className='w-1/3 h-1/3 mx-auto'/>
        <h1 className="font-bold text-2xl text-center my-6">
            Mobassera Zaman
        </h1>
        <p className="text-center">
            Former Software Engineer at HubSpot. Looking for Entry Level opportunities.
        </p>
    </WrapperComponent>
}