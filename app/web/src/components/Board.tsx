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
        <section className="flex flex-col items-center gap-2">
            <header className="bg-primary flex items-center justify-between gap-48 rounded-md p-4">
                <h1 className="text-neutral text-3xl"> Title </h1>
                <div className="bg-accent cursor-pointer rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                        <path fill="#fff" d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V9h4a1 1 0 0 0 0-2H9z" />
                    </svg>
                </div>
            </header>
            <ul>
                <li></li>
            </ul>
        </section>
    );
}