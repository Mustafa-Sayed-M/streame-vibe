export const sliceYearDate = (yearDate) => {
    return (yearDate || '').slice(0, 4)
};
export const formateRuntime = (runtime) => {
    if (runtime >= 360) {
        return `6 Hour and ${runtime - 360} Minutes`;
    } else if (runtime >= 300) {
        return `5 Hour and ${runtime - 300} Minutes`;
    } else if (runtime >= 240) {
        return `4 Hour and ${runtime - 240} Minutes`;
    } else if (runtime >= 180) {
        return `3 Hour and ${runtime - 180} Minutes`;
    } else if (runtime >= 120) {
        return `2 Hour and ${runtime - 120} Minutes`;
    } else if (runtime >= 60) {
        return `1 Hour and ${runtime - 60} Minutes`;
    }
    return runtime + ' Minutes';
};