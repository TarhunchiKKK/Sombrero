import * as fs from 'fs';

export function setupFilesStorage() {
    const filesStorage: string = process.env.FILES_STORAGE || 'static';

    try {
        if (!fs.existsSync(filesStorage)) {
            fs.mkdirSync(filesStorage);
        }
    } catch (error) {
        console.error(`Error with creating static files storage`);
    }
}
