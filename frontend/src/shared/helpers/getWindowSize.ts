export function getWindowSize(): string {
    const windowSize = window.innerWidth
    if (windowSize <= 640) {
        return 'sm'
    }
    else if (640 < windowSize && windowSize <= 1024) {
        return 'md'
    }
    else {
        return 'lg'
    }
}