import React from "react";
import Container from "./../../common/container";

function Settings(props) {
    return (
        <section className="flex justify-center content-center mt-[100px] my-2">
            <Container maxWidth={400}>
                <div className="flex justify-space items-center flex-col gap-[100px]">
                    <div className="flex justify-space items-center flex-col">
                        <h2>Settings</h2>
                        <span>
                            <h4>Language:</h4>
                        </span>
                        <span>
                            <h4>Theme:</h4>
                        </span>
                    </div>
                    <div>
                        <p>About Me</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

Settings.propTypes = {};

export default Settings;
