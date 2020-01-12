import {dialog} from "electron";

export default function showExportPDFDialog(){
    return new Promise((res, rej) => {
        const file = dialog.showSaveDialog({
            title: "export as PDF",
            filters: [{name: "pdf file", extensions: ["pdf"]}]
        });
        if(file){
            res(file);
        }else{
            rej();
        }
    });
}