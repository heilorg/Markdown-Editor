import {dialog} from "electron";

export default function showOpenFileDialog(){
    return new Promise((res, rej) => {
        const files = dialog.showOpenDialog({
            title: "open",
            properties: ["openFile"],
            filters: [{name: "markdown file", extensions: ["md"]}]
        });
        if(files && files.length > 1){
            res(files);
        }else{
            rej();
        }
    });
};                    