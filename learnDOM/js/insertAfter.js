/**
 * 在target元素后面插入新元素newEle
 * @param {Object} newEle 需要新插入的元素
 * @param {Object} target 目标位置的元素
 */
function insertAfter(newEle, target) {
    var parent = target.parentNode;
    if (parent.lastChild == target) {
        parent.appendChild(newEle);
    } else { // target不是最后一个元素，则插入到下一个兄弟元素之前
        parent.insertBefore(newEle, target.nextSibling);
    }
}