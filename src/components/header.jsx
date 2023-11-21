export default function Header({children}) {
    return (
        <header className="flex flex-colum items-center justify-center header">
            {children}
        </header>
    );
}