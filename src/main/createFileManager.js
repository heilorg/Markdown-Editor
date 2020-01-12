import fs from "fs";

class fileManager{
    constructor(){
        this.filePath = "";
    }

    saveFile(filePath, text){
        return new Promise((res) => {
            fs.writeFileSync(filePath, text);
            this.filePath = filePath;
            res();
        });
    }

    readFile(filePath){
        return new Promise((res) => {
            const text = fs.readFileSync(filePath, "utf-8");
            this.filePath = filePath;
            res(text);
        });
    }

    overWriteFile(text){
        return this.saveFile(this.filePath, text);
    }

    writePDF(filePath, pdf){
        return new Promise(res => {
            fs.writeFileSync(filePath, pdf);
            res();
        });
    }
}

export default function createFilemanager(){
    return new fileManager();
}