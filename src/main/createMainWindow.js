import {BrowserWindow} from "electron";

class mainWindow{
    constructor() {
        const option = {
            width: 800,
            height: 600
        };
        this.window = new BrowserWindow(option);
        this.window.loadURL(`file://${__dirname}/../../index.html`);
        this.window.on("closed", () => {
            this.window = null;
        });
    }
}

export default function createMainWindow() {
    return new mainWindow();
}   