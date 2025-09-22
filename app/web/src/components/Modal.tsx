import { Modal as MUIModal } from '@mui/material';
import type { Dispatch } from 'react';

function Modal({ handleOpen }: { handleOpen: [boolean, Dispatch<boolean>] }) {
    const [open, setOpen] = handleOpen;

    return (
        <MUIModal open={open}>
            <main className="h-[50dvh] w-[50dvw] mx-auto my-auto bg-primary" onClick={() => setOpen(false)}>
                <header className="flex justify-center px-4 py-2 w-full items-center">
                    <h1 className="text-neutral text-2xl">Workspace</h1>
                </header>
            </main>
        </MUIModal>
    );
}

export default Modal;
