import {BrowserWindow, ipcMain} from "electron";

class mainWindow{
    requestText(){
        return new Promise((res) => {
            this.window.webContents.send("REQUEST_TEXT");
            ipcMain.once("REPLY_TEXT", (_e, text) => res(text));
        });
    }

    sendText(text){
        this.window.webContents.send("SEND_TEXT", text);
    }

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