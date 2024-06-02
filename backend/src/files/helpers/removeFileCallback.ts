export function removeFileCallback(err) {
    if (err) {
        console.error(`Error occured when removing file: ${err.message}`);
    }
}
