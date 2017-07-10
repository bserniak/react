export function GetTrails() {
    return fetch('http://trailstatusapi.azurewebsites.net/api/status')
        .then(response => response.json());
}