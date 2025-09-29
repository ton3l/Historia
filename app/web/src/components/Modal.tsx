import { Modal as MUIModal } from '@mui/material';
import type { Dispatch } from 'react';

function Modal({ handleOpen }: { handleOpen: [boolean, Dispatch<boolean>] }) {
    const [open, setOpen] = handleOpen;

    return (
        <MUIModal open={open}>
            <main className="bg-primary mx-auto my-[15dvh] flex h-[60dvh] w-[50dvw] flex-col rounded-md">
                <Header action={setOpen} />
                <section className="flex flex-col overflow-y-auto">
                    <Board />
                    <Board />
                    <Board />
                    <Board />
                    <Board />
                    <Board />
                </section>
            </main>
        </MUIModal>
    );
}

export default Modal;

function Header({ action: setOpen }: { action: Dispatch<boolean> }) {
    return (
        <header className="flex w-full items-center justify-between border-b-1 border-gray-300 px-4 py-2">
            <svg onClick={() => setOpen(false)} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-4 -4 30 30" fill="none" >
                <path className="fill-variant" fillRule="evenodd" clipRule="evenodd" d="M12.0137 15.2305L20.096 23.3036C20.5249 23.732 21.1066 23.9727 21.7131 23.9727C22.3196 23.9727 22.9013 23.732 23.3302 23.3036C23.7591 22.8752 24 22.2942 24 21.6884C24 21.0825 23.7591 20.5015 23.3302 20.0731L15.2448 12L23.3287 3.92686C23.5409 3.71474 23.7093 3.46294 23.8241 3.18584C23.9389 2.90874 23.998 2.61175 23.9979 2.31185C23.9979 2.01194 23.9387 1.71498 23.8237 1.43793C23.7087 1.16088 23.5403 0.909163 23.3279 0.697147C23.1155 0.485131 22.8635 0.31697 22.586 0.202266C22.3086 0.0875623 22.0113 0.0285611 21.711 0.0286318C21.4108 0.0287025 21.1135 0.0878432 20.8361 0.202678C20.5588 0.317512 20.3068 0.485792 20.0945 0.697908L12.0137 8.77105L3.93131 0.697908C3.72053 0.479708 3.46834 0.305625 3.18948 0.185816C2.91061 0.0660075 2.61065 0.00287254 2.3071 9.57629e-05C2.00355 -0.00268102 1.70248 0.0549555 1.42147 0.169643C1.14045 0.28433 0.885119 0.45377 0.670364 0.668078C0.45561 0.882385 0.285735 1.13727 0.170652 1.41785C0.0555696 1.69844 -0.00241657 1.99911 7.71455e-05 2.30232C0.00257086 2.60553 0.0654943 2.9052 0.185177 3.18386C0.304859 3.46252 0.478903 3.71458 0.697153 3.92534L8.78256 12L0.698678 20.0747C0.480427 20.2854 0.306384 20.5375 0.186701 20.8161C0.067019 21.0948 0.00409486 21.3945 0.00160114 21.6977C-0.000892569 22.0009 0.0570936 22.3016 0.172176 22.5821C0.287259 22.8627 0.457134 23.1176 0.671888 23.3319C0.886643 23.5462 1.14198 23.7157 1.42299 23.8304C1.704 23.945 2.00507 24.0027 2.30862 23.9999C2.61218 23.9971 2.91214 23.934 3.191 23.8142C3.46986 23.6944 3.72205 23.5203 3.93284 23.3021L12.0137 15.2305Z" />
            </svg>
            <section className="flex items-center gap-2">
                <h1 className="text-neutral text-2xl">Workspace</h1>
                <ThemeSelector />
            </section>
            <button className="bg-accent cursor-pointer rounded-full px-2 py-2">
                <svg className="me-[-0.5px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path className="fill-white" d="M8 1.6C7.05701 1.6 6.15264 1.93714 5.48584 2.53726C4.81905 3.13737 4.44444 3.95131 4.44444 4.8C4.44444 5.64869 4.81905 6.46263 5.48584 7.06274C6.15264 7.66286 7.05701 8 8 8C8.94299 8 9.84736 7.66286 10.5142 7.06274C11.181 6.46263 11.5556 5.64869 11.5556 4.8C11.5556 3.95131 11.181 3.13737 10.5142 2.53726C9.84736 1.93714 8.94299 1.6 8 1.6ZM2.66667 4.8C2.66667 3.52696 3.22857 2.30606 4.22876 1.40589C5.22896 0.505713 6.58551 0 8 0C9.41449 0 10.771 0.505713 11.7712 1.40589C12.7714 2.30606 13.3333 3.52696 13.3333 4.8C13.3333 6.07304 12.7714 7.29394 11.7712 8.19411C10.771 9.09429 9.41449 9.6 8 9.6C6.58551 9.6 5.22896 9.09429 4.22876 8.19411C3.22857 7.29394 2.66667 6.07304 2.66667 4.8ZM4.44444 12.8C3.7372 12.8 3.05892 13.0529 2.55883 13.5029C2.05873 13.953 1.77778 14.5635 1.77778 15.2C1.77778 15.4122 1.68413 15.6157 1.51743 15.7657C1.35073 15.9157 1.12464 16 0.888889 16C0.653141 16 0.427048 15.9157 0.260349 15.7657C0.0936505 15.6157 0 15.4122 0 15.2C0 14.1391 0.468253 13.1217 1.30175 12.3716C2.13524 11.6214 3.2657 11.2 4.44444 11.2H11.5556C12.7343 11.2 13.8648 11.6214 14.6983 12.3716C15.5317 13.1217 16 14.1391 16 15.2C16 15.4122 15.9064 15.6157 15.7397 15.7657C15.573 15.9157 15.3469 16 15.1111 16C14.8754 16 14.6493 15.9157 14.4826 15.7657C14.3159 15.6157 14.2222 15.4122 14.2222 15.2C14.2222 14.5635 13.9413 13.953 13.4412 13.5029C12.9411 13.0529 12.2628 12.8 11.5556 12.8H4.44444Z" />
                </svg>
            </button>
        </header>
    );
}

function ThemeSelector() {
    let currentTheme = 0;
    function tempHandleTheme() {
        const themes = ['light', 'dark', 'pink', 'gray'];

        if (currentTheme === themes.length - 1) currentTheme = 0;
        else currentTheme += 1;

        document.querySelector('html')?.setAttribute('data-theme', themes[currentTheme]);
    }

    return (
        <button className="bg-accent mt-1 h-5 w-5 cursor-pointer rounded-full p-0.5" onClick={tempHandleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4">
                    <path stroke="#fff" d="M12 21a9 9 0 0 1 0-18c4.97 0 9 3.582 9 8c0 1.06-.474 2.078-1.318 2.828S17.693 15 16.5 15H14a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21" />
                    <path stroke="#ed8796" d="M7.5 10.5c0 1.333 2 1.333 2 0s-2-1.333-2 0" />
                    <path stroke="#a6da95" d="M11.5 7.5c0 1.333 2 1.333 2 0s-2-1.333-2 0" />
                    <path stroke="#8aadf4" d="M15.5 10.5c0 1.333 2 1.333 2 0s-2-1.333-2 0" />
                </g>
            </svg>
        </button>
    );
}

function Board() {
    return (
        <section className="flex items-center justify-between gap-4 border-b border-gray-300 px-4 py-2 cursor-pointer last:border-0">
            <div className="flex items-center gap-2">
                <div className="h-14 w-32 rounded-2xl bg-gray-300"></div>
                <h2 className="text-neutral text-xl">Board Title</h2>
            </div>
            <div className="text-neutral/50 text-xs">
                <p className="font-semibold">last updated:</p>
                <p className="text-center font-bold">2023-01-01</p>
            </div>
        </section>
    );
}
