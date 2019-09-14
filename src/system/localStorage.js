export const setValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getValue = key =>
    JSON.parse(localStorage.getItem(key));
