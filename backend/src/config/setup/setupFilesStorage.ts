import * as fs from 'fs';

export function setupFilesStorage() {
    const filesStorage: string = process.env.FILES_STORAGE || 'static';
    const folders: string[] = [
        `${filesStorage}/advertisements`,
        `${filesStorage}/accounts`,
        `${filesStorage}/contacts`,
        `${filesStorage}/home`,
    ];

    console.log(process.env.FILES_STORAGE);

    try {
        if (!fs.existsSync(filesStorage)) {
            fs.mkdirSync(filesStorage);
        }
    } catch (error) {
        console.error(`Error with creating static files storage`);
    }

    for (const folder of folders) {
        try {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder);
            }
        } catch (error) {
            console.error(`Error with creating folder: ${folder}`);
        }
    }
}
