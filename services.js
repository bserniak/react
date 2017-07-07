export function GetDelegates(empId) {
    return fetch('http://trailstatusapi.azurewebsites.net/api/status')
        .then(response => response.json());
}