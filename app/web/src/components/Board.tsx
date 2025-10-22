function Board() {
    return (
        <main className="flex w-full gap-2 p-4">
            <List />
            <List />
            <List />
            <List />
        </main>
    );
}

export default Board;

function List() {
    return (
        <main className="flex w-full max-w-[calc(100dvw/4)] min-w-64 flex-1 flex-col gap-2">
            <header className="bg-primary flex items-center justify-between rounded-lg p-4">
                <h1 className="text-neutral text-3xl"> Title </h1>
                <div className="bg-accent cursor-pointer rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                        <path fill="#fff" d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V9h4a1 1 0 0 0 0-2H9z" />
                    </svg>
                </div>
            </header>
            <ul className="px-8 py-2">
                <li>
                    <Task />
                </li>
            </ul>
        </main>
    );
}

function Task() {
    const extended = true;
    return (
        <main className="bg-primary text-neutral flex w-full min-w-48 max-h-56 flex-col items-center px-4 py-1.5 gap-1 justify-between rounded-lg">
            <header className="flex w-full items-center justify-between">
                <h2 className="text-2xl">Title</h2>
                <section className="flex flex-col items-center justify-between">
                    <div>
                        {/* prettier-ignore */}
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            {!extended ? (
                                /* prettier-ignore */
                                <path id="extend-card" className="fill-neutral stroke-neutral" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14" />
                            ) : (
                                <path id="shrink-card" className="fill-neutral" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
                            )}
                        </svg>
                    </div>
                    <p className="cursor-default text-xs font-semibold text-amber-500">2025-01-01</p>
                </section>
            </header>
            <section className="flex w-full items-center gap-2">
                <Tag />
            </section>
            <article className="h-32 line-clamp-5 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis expedita ratione, nemo atque cupiditate facilis commodi culpa vel corporis odit officia saepe laborum incidunt quos voluptatem animi consequatur libero aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat, atque fuga soluta optio tempora neque vel! Sapiente alias, numquam culpa laborum reprehenderit hic eos natus, debitis nemo beatae atque.
            </article>
            <ul className="flex w-full items-center overflow-x-clip self-start gap-1 [mask-image:linear-gradient(to_left,transparent,black_50px)]">
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
                <li className="h-5 w-5 shrink-0 bg-gray-500 rounded-full">
                </li>
            </ul>
        </main>
    );
}

function Tag() {
    return (
        <main className="px-1.5 pb-0.5 bg-gray-400 text-white text-xs rounded-xs font-semibold">
            Testing
        </main>
    );
}