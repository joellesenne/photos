export  default function Navigation({children}) {
    return (
        <nav className="flex items-center justify-center flex-wrap w-100 w-media-80 nav">
            {children}
        </nav>
    )
}