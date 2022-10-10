import React from "react";
import { useTheme } from "../../hooks/useTheme";
import ThemeButton from "../main/layouts/components/themeButton";
import Container from "./../../common/container";

function Settings(props) {
    const { themes, activeTheme, setActiveTheme } = useTheme();
    return (
        <section className="flex justify-center content-center mt-[100px] my-2">
            <Container maxWidth={400}>
                <div className="flex justify-space items-center flex-col gap-[100px]">
                    <div className="flex justify-space items-center flex-col">
                        <h2>Settings</h2>
                        <span className="flex flex-col items-center">
                            <h4>Themes:</h4>
                            <div className="flex flex-wrap gap-[10px] items-center">
                                {themes.map((item) => (
                                    <ThemeButton
                                        key={item}
                                        setActiveTheme={setActiveTheme}
                                        color={item}
                                        activeTheme={activeTheme}
                                    />
                                ))}
                            </div>
                        </span>
                    </div>
                    <div>
                        <p>
                            Developed by{" "}
                            <a
                                className=""
                                href="https://resume-react-29acd.web.app/"
                            >
                                happy436
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

Settings.propTypes = {};

export default Settings;
