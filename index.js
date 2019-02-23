/**
 * Sync For Each
 * @param {Array} items: with the element sto iterate
 * @param {Function} callback: trigger the next element
 * @param callback.item: the current item
 * @param {Number} callback.key: the current item key
 * @param {Function} callback.next: trigger the next item on the object
 * @param {Function} finishCallback: determine when all elements are iterated.
 */
function forEachOf(items, callback, finishCallback) {
    if (items.length !== undefined) {
        this.key = this.key || 0;
        if (this.key >= items.length)
            finishCallback();
        else {
            callback(items[this.key], this.key, () => {
                this.key++;
                this.forEachOf(items, callback, finishCallback);
            });
        }
    } else {
        finishCallback();
    }
}
