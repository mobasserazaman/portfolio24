import { forwardRef, useImperativeHandle, useRef } from 'react';
import resume from '../assets/Resume_Mobassera_Zaman.pdf'
import transcript from '../assets/Transcript.pdf'
const Downloads = forwardRef(function Modal(props, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    function openNewTab(file){
        if(file === 'transcript'){
            window.open(transcript,'_blank');
        }else if(file === 'resume'){
            window.open(resume,'_blank' );
        }
    }

    return <dialog ref={dialog}>
        <div className="w-[30rem] h-[25rem] bg-stone-800 text-stone-200 text-center py-16">
            <h1 className='text-2xl'>Downloads</h1>
            <ul className="py-8">
                <li className="py-4">
                    <button onClick={() => openNewTab('resume')} className="bg-stone-100 py-2 w-1/3 text-slate-600">Resume</button>
                </li>
                <li className="py-4">
                <button onClick={() => openNewTab('transcript')} className="bg-stone-100 py-2 w-1/3 text-slate-600">Transcript</button>
                </li>

            </ul>
            <form method="dialog">
                <button>Close</button>
            </form>
        </div>

    </dialog>
})

export default Downloads;