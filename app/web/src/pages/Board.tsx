import { BoardService } from '@services/board.service';
import { ListService } from '@services/list.service';
import { useParams } from '@tanstack/react-router';
import type { Board as BoardEntity } from '@historia/types/board';
import type { List as ListEntity } from '@historia/api/src/domain/core/list.entity';
import type { Task as TaskEntity } from '@historia/api/src/domain/core/task.entity';
import { useEffect, useState } from 'react';
import { useNav } from '@hooks/NavProvider';

function Board() {
    const { boardId } = useParams({ from: '/board/$boardId' });
    const [board, setBoard] = useState<BoardEntity>({} as BoardEntity);
    const { navVisibility, title, setTitle } = useNav();

    async function fetchBoard() {
        const response = await BoardService.get(boardId);
        setBoard(response.data.board);
    }

    useEffect(() => {
        fetchBoard();
    }, [boardId]);

    async function createList() {
        const position = board.lists?.length ?? 0;
        await ListService.create(boardId, position);
        fetchBoard();
    }

    return (
        <main className="flex w-full gap-2 p-4">
            <button
                onClick={createList}
                className={
                    'bg-accent fixed right-4 w-fit cursor-pointer rounded-full p-3 transition-all duration-350 ease-in-out ' +
                    (navVisibility ? 'visible top-4' : 'invisible top-[-48px]')
                }
                title='add list'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                    <path fill="#fff" d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V9h4a1 1 0 0 0 0-2H9z" />
                </svg>
            </button>

            {board?.lists?.map((list) => (
                <List list={list} key={list.id} />
            ))}
        </main>
    );
}

export default Board;

function List({ list }: { list: ListEntity }) {
    const [tasks, setTasks] = useState<TaskEntity[]>([]);
    let taskeys = 0;
    async function fetchTasks() {
        const response = await ListService.getTasks(list.id!);
        setTasks(response.data.tasks);
    }

    return (
        <main className="flex w-full max-w-[calc(100dvw/4)] min-w-64 flex-1 flex-col gap-2">
            <header className="bg-primary flex items-center justify-between rounded-lg p-4">
                <h1 className="text-neutral text-3xl"> {list.title} </h1>
                <div className="bg-accent cursor-pointer rounded-full p-1" onClick={() => {setTasks([...tasks, {} as TaskEntity]);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16">
                        <path fill="#fff" d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V9h4a1 1 0 0 0 0-2H9z" />
                    </svg>
                </div>
            </header>
            <ul className="flex flex-col px-8 py-2 gap-4">
                {
                    tasks?.map((task: TaskEntity) => ( <Task key={taskeys++} /> ))
                }
            </ul>
        </main>
    );
}

function Task() {
    const [extended, setExtended] = useState(false);

    function toggleExtended() {
        if (!extended) {
            setExtended(true);
            return;
        }
        setExtended(false);
    }

    return (
        <li className="bg-primary text-neutral flex max-h-56 w-full min-w-48 flex-col items-center justify-between gap-1 rounded-lg px-4 py-1.5">
            <header className="flex w-full items-center justify-between">
                <h2 className="text-2xl">Title</h2>
                <section className="flex flex-col items-center justify-between">
                    <div onClick={toggleExtended}>
                        {/* prettier-ignore */}
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            {!extended ? (
                                /* prettier-ignore */
                                <path id="extend-card" className="fill-neutral stroke-neutral" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14" />
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
            <article
                className={
                    'line-clamp-5 text-justify transition-[max-height] duration-400 ease-in-out ' +
                    (extended ? 'max-h-32' : 'max-h-0')
                }
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur commodi illo doloremque, quo eveniet quam
                quidem necessitatibus perspiciatis amet temporibus ipsum. Vel ea est in similique quo! Consequuntur, repellendus
                minus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur commodi illo doloremque, quo eveniet
                quam quidem necessitatibus perspiciatis amet temporibus ipsum. Vel ea est in similique quo! Consequuntur,
                repellendus minus?
            </article>
            <ul className="flex w-full items-center gap-1 self-start overflow-x-clip [mask-image:linear-gradient(to_left,transparent,black_50px)]">
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
                <li className="h-5 w-5 shrink-0 rounded-full bg-gray-500"></li>
            </ul>
        </li>
    );
}

function Tag() {
    return <main className="rounded-xs bg-gray-400 px-1.5 pb-0.5 text-xs font-semibold text-white">Testing</main>;
}
