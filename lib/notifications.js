
export function requestPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("The user accepted");
        }
    });
}

export function displayNotification() {
    const notification = new Notification("Hello World!");
}