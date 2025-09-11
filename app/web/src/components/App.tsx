import Nav from '@components/Nav.tsx';

function App() {
    return (
        <>
        <div className="flex gap-2 content-center justify-center w-screen">
            <div className="w-32 h-32 m-0.5 rounded-md inline bg-primary"></div>
            <div className="w-32 h-32 m-0.5 rounded-md inline bg-accent"></div>
            <div className="w-32 h-32 m-0.5 rounded-md inline bg-background"></div>
            <div className="w-32 h-32 m-0.5 rounded-md inline bg-neutral"></div>
        </div>
        <Nav></Nav>
        </>
    );
}

export default App;
