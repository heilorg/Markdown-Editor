import {app} from "electron";
import createMainWindow from "./createMainWindow";
import setAppMenu from "./setAppMenu";

let mainWindow = null;

function openFile(){

}

function saveFile(){

}

function saveAsNewFile(){

}

function exportPDF(){

}

app.on("ready", () => {
    mainWindow = createMainWindow();
    setAppMenu({openFile, saveFile, saveAsNewFile, exportPDF});
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});

app.on("activate", () => {
    if(!hasVisibleWindows){
        mainWindow = createMainWindow();
    }
});