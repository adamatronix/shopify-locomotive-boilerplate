/**
 * Transform function
 * @param {HTMLElement} $el         - DOM element
 * @param {number}      value       - transform value
 * @return {void}
 */

const transform = ($el, value) => {
    $el.style.msTransform = value
    $el.style.webkitTransform = value
    $el.style.MozTransform = value
    $el.style.OTransform = value
    $el.style.transform = value
}


/**
 * Get translate function
 * @param {HTMLElement}     $el     - DOM Element
 * @return {number|object}  translate value
 */

const getTranslate = $el => {

    if(!window.getComputedStyle) {
        return
    }

    let translate
    const style = getComputedStyle($el)
    const transform = style.msTransform || style.webkitTransform || style.MozTransform || style.OTransform || style.transform

    const matrix3D = transform.match(/^matrix3d\((.+)\)$/)
    if(matrix3D) {
        translate = parseFloat(matrix3D[1].split(', ')[13])
    } else {
        const matrix = transform.match(/^matrix\((.+)\)$/)
        translate = {
            x: matrix ? parseFloat(matrix[1].split(', ')[4]) : 0
            y: matrix ? parseFloat(matrix[1].split(', ')[5]) : 0
        }
    }

    return translate
}


// Export
export {
    transform,
    getTranslate
}
