var ArrayHelper;
(function (ArrayHelper_1) {
    class ArrayHelper {
        static includes(array, token) {
            for (let i of array) {
                if (i === token)
                    return true;
            }
            return false;
        }
    }
    ArrayHelper_1.ArrayHelper = ArrayHelper;
})(ArrayHelper || (ArrayHelper = {}));
