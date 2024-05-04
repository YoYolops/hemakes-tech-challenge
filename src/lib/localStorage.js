const Config = Object.freeze({
    APP_NAME: "HEMAKES_TECH_CHALLENGE"
})

export function getLocalStorageData() {
    const foundData = JSON.parse(localStorage.getItem(Config.APP_NAME));
    if(!foundData) return [];
    return foundData;
}

export function setLocalStorageData(data) {
    localStorage.setItem(Config.APP_NAME, JSON.stringify(data))
}