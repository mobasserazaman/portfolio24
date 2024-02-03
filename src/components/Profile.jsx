import myphoto from '../assets/IMG_4902.JPG'
export default function Profile(){
    return <div className="py-16 px-16 text-center">
        <img src={myphoto}  className='h-1/4 w-1/4 mx-auto my-6'/>
        <h1 className="font-bold text-xl">
            Mobassera Zaman
        </h1>
        <p>
            Looking for Entry Level opportunities.

        </p>
    </div>
}