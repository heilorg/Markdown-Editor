import {dialog} from "electron";

export default function showSaveAsFileDialog(){
    return new Promise((res, rej) => {
        const file = dialog.showSaveDialog({
            title: "save",
            filters: [{name: "markdown file", extensions: ["md"]}]
        });
        if(file){
            res(file);
        }else{
            rej();
        }
    });
};