import React from 'react';
import {useGetYear} from "../utils";
export default function Footer() {
    return (
        <footer className="footer">
            <p>
                © {useGetYear()}{" "}
                <a
                    href="https://joellesenne.dev"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Joël Lesenne
                </a>
            </p>
        </footer>
    );
}
