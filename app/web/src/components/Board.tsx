function Board() {
    return (
        <main className="flex w-full p-4">
            <List />
        </main>
    );
}

export default Board;

function List() {
    return (
        <section className="flex w-full max-w-[calc(100dvw/4)] min-w-64 flex-1 flex-col gap-2">
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
        </section>
    );
}

function Task() {
    const extended = true;
    return (
        <section className="bg-primary text-neutral flex w-full min-w-48 items-center justify-between rounded-lg">
            <header className="flex w-full items-center justify-between px-4 py-1">
                <h2 className="text-2xl">Title</h2>
                <div className="flex flex-col items-center justify-between">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            {!extended ? (
                                /* prettier-ignore */
                                <path id="extend-card" className="fill-variant" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14" />
                            ) : (
                                <path id="shrink-card" className="fill-variant" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
                            )}
                        </svg>
                    </p>
                    <p className="font-semibold text-amber-500">2025-01-01</p>
                </div>
            </header>
        </section>
    );
}
