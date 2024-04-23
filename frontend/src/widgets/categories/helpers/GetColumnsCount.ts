export function GetColumnsCount(): number {
    const width: number = window.innerWidth;
    if (1500 < width) {
        return 5;
    } else if (768 < width && width <= 1500) {
        return 4;
    } else if (540 < width && width <= 768) {
        return 3;
    } else if (320 < width && width <= 540) {
        return 2;
    } else {
        return 1;
    }
}
