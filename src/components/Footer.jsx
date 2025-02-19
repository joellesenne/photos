import { currentGetYear } from "../utils";

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                © {currentGetYear()}{" | "}
                All rights reserved{" | "}
                <a
                    href="https://joellesenne.dev"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Joël Lesenne
                </a>{" | "}
                This project is{" "}
                <a
                    href="https://github.com/joellesenne/photos"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Open Source
                </a>
            </p>
        </footer>
    );
}
