import myphoto from '../assets/pic.png'
import resume from '../assets/Resume_Mobassera_Zaman.pdf'
import transcript from '../assets/Transcript.pdf'
export default function Profile() {

    function openNewTab(file){
        if(file === 'transcript'){
            window.open(transcript,'_blank');
        }else if(file === 'resume'){
            window.open(resume,'_blank' );
        }
    }



    return <fragment className='profile'>
        <img src={myphoto} className='mx-auto my-20' alt="girl_coding_image"/>
        <h1 className="font-bold text-2xl text-center my-6">
            Mobassera Zaman
        </h1>
        <p className="text-center mx-8">
            Former Software Engineer at HubSpot. Looking for Entry Level opportunities.
        </p>
        <div className="my-5">
            <button onClick={() => openNewTab('resume')} className="inline-flex items-center w-screen justify-center my-1">
                <svg className="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Resume</span>
            </button>
            <button onClick={() => openNewTab('transcript')} className="inline-flex items-center w-screen justify-center my-1">
                <svg className="fill-current w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Transcript</span>
            </button>
        </div>

    </fragment>
}