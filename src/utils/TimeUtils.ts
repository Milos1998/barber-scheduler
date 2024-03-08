function formatTime(time: number): string {
    if (time < 10) return `0${time}`;
    return time.toString();
}

export function parseTime(date: Date | string): string {
    const dateConverted = date instanceof Date ? date : new Date(date);
    return `${formatTime(dateConverted.getHours())}:${formatTime(dateConverted.getMinutes())}`;
}

export function parseDate(date: Date | string): string {
    const dateConverted = date instanceof Date ? date : new Date(date);
    return `${dateConverted.getDate()}/${dateConverted.getMonth()}/${dateConverted.getFullYear()}`;
}
