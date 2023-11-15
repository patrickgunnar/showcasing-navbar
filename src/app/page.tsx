"use client";

import { craftingStyles } from "galadrielcss";
import { useEffect, useState } from "react";
import { CraftClassesType } from "galadrielcss/src/types/typeManifest";
// Importing the CSS file generated by Galadriel.CSS
import "./page.css";

export default function Home() {
    const [isDropdown, setIsDropdown] = useState(false);

    useEffect(() => {
        const elementDropdown = document.getElementById("dropdown");

        elementDropdown?.addEventListener("mouseenter", () => setIsDropdown(true));
        elementDropdown?.addEventListener("mouseleave", () => setIsDropdown(false));
    });

    const nav = craftingStyles(() => ({
        background: "linear-gradient(to right, #396afc, #2948ff)",
        boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        fontFamily: "'Comfortaa', sans-serif",
        padding: "5px",
        height: "70px",
        width: "100%",
        minPortraitTablets: {
            justifyContent: "space-between",
            padding: "10px 30px",
        }
    }));

    const logo = craftingStyles(() => ({
        display: "none",
        fontSize: "30px",
        fontWeight: "bold",
        color: "white",
        cursor: "pointer",
        minPortraitTablets: {
            display: "block",
        }
    }));

    const ul = craftingStyles(() => ({
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        position: "relative",
        minPortraitTablets: {
            gap: "30px",
            justifyContent: "space-between",
            width: "auto",
        }
    }));

    const li = craftingStyles(() => ({
        borderRadius: "5px",
        cursor: "pointer",
        listStyle: "none",
        transition: "all 0.3s ease",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        padding: "10px 20px",
        margin: "0 5px",
        width: "auto",
        hover: {
            backgroundColor: "#192d9b",
        },
        minPortraitTablets: {
            fontSize: "18px",
        }
    }));

    const dropdown = craftingStyles(() => {
        let styles: CraftClassesType = {
            background: "linear-gradient(to right, #396afc, #2948ff)",
            boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
            borderRadius: "5px",
            boxSizing: "border-box",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            top: "60px",
            left: "10px",
            padding: "10px",
            position: "absolute",
            height: "auto",
            width: "auto",
        }

        if (isDropdown) styles = { ...styles, visibility: "visible", opacity: "1" }
        else styles = { ...styles, visibility: "hidden", opacity: "0" }

        return styles
    });

    return (
        <nav className={nav}>
            <a className={logo}>Logo</a>
            <ul className={ul}>
                <li className={li} id="dropdown">
                    Dropdown
                    <ul className={dropdown}>
                        <li className={li}>Item 1</li>
                        <li className={li}>Item 2</li>
                        <li className={li}>Item 3</li>
                    </ul>
                </li>
                <li className={li}>Contact</li>
                <li className={li}>About</li>
            </ul>
        </nav>
    );
}
