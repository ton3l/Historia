import Modal from '@components/Modal';
import { useState } from 'react';

function Nav() {
    const title = 'Historia';
    const [handleOpenModal, setHandleOpenModal] = useState(false);

    function toggleModal() {
        if (!handleOpenModal) {
            setHandleOpenModal(true);
            return;
        }
        setHandleOpenModal(false);
    }

    return (
        <>
            <Modal handleOpen={[handleOpenModal, setHandleOpenModal]} />
            <button>
            </button>
            <nav className="bg-accent fixed bottom-0 flex w-[100dvw] justify-between px-16 py-4">
                <p className="text-neutral"></p>
                <p className="text-3xl text-white">{title}</p>
                <button className="cursor-pointer rounded-full bg-white px-2 py-1.5" onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 23 23" fill="none">
                        <path className="stroke-accent" d="M16.8824 22L14.7647 19.375V3.625C14.7647 2.15369 15.6954 1 16.8824 1C18.0693 1 19 2.15369 19 3.625V19.375L16.8824 22ZM16.8824 22H3.11765C2.55601 22 2.01738 21.7234 1.62024 21.2312C1.22311 20.7389 1 20.0712 1 19.375C1 18.6788 1.22311 18.0111 1.62024 17.5188C2.01738 17.0266 2.55601 16.75 3.11765 16.75H7.35294C7.91458 16.75 8.45321 16.4734 8.85034 15.9812C9.24748 15.4889 9.47059 14.8212 9.47059 14.125C9.47059 13.4288 9.24748 12.7611 8.85034 12.2688C8.45321 11.7766 7.91458 11.5 7.35294 11.5H4.17647M14.7647 6.25H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </nav>
        </>
    );
}

export default Nav;
