
// FUNCTION:: check if the value is empty/null
function isNullOrEmpty(value) {
    if (value == null || value == '' || value.length === 0) {
        return true
    }
    return false
}

// FUNCTION:: check if the value is stored as null/empty
function isEmptyNullOrNoStorage(value) {
    if (window.localStorage.getItem(value) === null || window.localStorage.getItem(value) === '') {
        return true
    }
    return false
}

// FUNCTION:: get stored value
function getStoredValue(value) {
    return window.localStorage.getItem(value)
}


