export function isKeyPressEventAlphaNumeric(event) {
    const keyCode = event.keyCode
    if(
        (keyCode <= 90 && keyCode >= 65) ||
        (keyCode >= 48 && keyCode <=57)
    ) return true
    return false
}