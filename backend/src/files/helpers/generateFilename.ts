const randomstring = require('randomstring');

export function generateFilename(fileName: string): string {
    const filename: string = randomstring.generate();
    const extension: string = fileName.split('.')[1];
    if (extension === undefined) return filename;
    else return filename + '.' + extension;
}
