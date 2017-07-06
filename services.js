export function GetDelegates(empId) {
    return fetch('http://localhost/Delegation/api/v1/Delegates/' + empId)
        .then(response => response.json());
}