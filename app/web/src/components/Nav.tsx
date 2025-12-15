import Modal from '@components/Modal';
import { useState } from 'react';
import { useNav } from '@hooks/NavProvider';

function Nav() {
    const { navVisibility, setNavVisibility, title } = useNav();
    const [modalVisibility, setModalVisibility] = useState(false);

    function toggleModal() {
        if (!modalVisibility) {
            setModalVisibility(true);
            return;
        }
        setModalVisibility(false);
    }

    function toggleNav() {
        if (!navVisibility) {
            setNavVisibility(true);
            return;
        }
        setNavVisibility(false);
    }

    return (
        <div className='fixed bottom-0 flex flex-col gap-2'>
            <Modal handleOpen={[modalVisibility, setModalVisibility]} />

            <button className={'absolute right-2 w-fit bg-accent p-3 rounded-full cursor-pointer transition-all ease-in-out duration-350 ' + (navVisibility ? 'bottom-18' : 'bottom-2')} onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none">
                        <path fill="#fff" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
                    </g>
                </svg>
            </button>

            <nav className={'bg-accent flex w-[100dvw] justify-between relative transition-all duration-400 ease-in-out overflow-hidden px-16 ' + (navVisibility ? 'translate-y-0 max-h-16 py-4' : 'translate-y-full max-h-0 py-0')}>
                <p className="text-neutral"></p>
                <p className="text-3xl text-white">{title}</p>
                <button className="cursor-pointer rounded-full bg-white px-2 h-9" onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 23 23" fill="none">
                        <path className="stroke-accent" d="M16.8824 22L14.7647 19.375V3.625C14.7647 2.15369 15.6954 1 16.8824 1C18.0693 1 19 2.15369 19 3.625V19.375L16.8824 22ZM16.8824 22H3.11765C2.55601 22 2.01738 21.7234 1.62024 21.2312C1.22311 20.7389 1 20.0712 1 19.375C1 18.6788 1.22311 18.0111 1.62024 17.5188C2.01738 17.0266 2.55601 16.75 3.11765 16.75H7.35294C7.91458 16.75 8.45321 16.4734 8.85034 15.9812C9.24748 15.4889 9.47059 14.8212 9.47059 14.125C9.47059 13.4288 9.24748 12.7611 8.85034 12.2688C8.45321 11.7766 7.91458 11.5 7.35294 11.5H4.17647M14.7647 6.25H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </nav>
        </div>
    );
}

export default Nav;
