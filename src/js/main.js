var GameObject;
(function (GameObject_1) {
    class GameObject {
        constructor() {
            this._verbMap = {};
        }
        getResponse(verb) {
            if (this._verbMap[verb] != null) {
                return this._verbMap[verb];
            }
            else {
                return this._defaultResponse;
            }
        }
        get Name() {
            return this._name;
        }
        get VerbMap() {
            return this._verbMap;
        }
        get DefaultResponse() {
            return this._defaultResponse;
        }
    }
    GameObject_1.GameObject = GameObject;
})(GameObject || (GameObject = {}));
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
/// <reference path="arrayhelper.ts" />
var InputParser;
(function (InputParser_1) {
    class InputParser {
        static parse(input) {
            let tokens = input.split(" ");
            let result = new ParserResult();
            //parses input according to the following pattern:
            // [verb][ignored]*[nounOne][ignored]*([preposition][ignored]*[nounTwo])?
            if (tokens.length <= 0)
                return result;
            result.verb = tokens.shift();
            while (tokens.length > 0 && ArrayHelper.ArrayHelper.includes(InputParser.ignoredTokens, tokens[0])) {
                tokens.shift();
            }
            if (tokens.length <= 0)
                return result;
            result.nounOne = tokens.shift();
            while (tokens.length > 0 && ArrayHelper.ArrayHelper.includes(InputParser.ignoredTokens, tokens[0])) {
                tokens.shift();
            }
            if (tokens.length > 0 && ArrayHelper.ArrayHelper.includes(InputParser.prepositions, tokens[0])) {
                result.prep = tokens.shift();
                while (tokens.length > 0 && ArrayHelper.ArrayHelper.includes(InputParser.ignoredTokens, tokens[0])) {
                    tokens.shift();
                }
                if (tokens.length > 0)
                    result.nounTwo = tokens.shift();
            }
            return result;
        }
    }
    InputParser.ignoredTokens = ["the", "a", "an", "my", "his"];
    InputParser.conjunctions = ["and", ","];
    InputParser.prepositions = ["in", "to", "on", "over", "through", "beside", "behind", "around"];
    InputParser_1.InputParser = InputParser;
    class ParserResult {
        constructor() {
            this.verb = null;
            this.nounOne = null;
            this.prep = null;
            this.nounTwo = null;
        }
        isValid() {
            if (!!this.verb && !!this.nounOne) {
                if (!!this.prep == !!this.nounTwo)
                    return true;
            }
            return false;
        }
        toString() {
            return (this.verb + " " + this.nounOne + " " + this.prep + " " + this.nounTwo);
        }
    }
})(InputParser || (InputParser = {}));
var JsonImporter;
(function (JsonImporter_1) {
    class JsonImporter {
        static import(type, filePath) {
            fetch(filePath)
                .then(response => response.json())
                .then(() => {
                treeData = JSON.parse(this.responseText);
                console.log(treeData);
            });
        }
    }
    JsonImporter_1.JsonImporter = JsonImporter;
})(JsonImporter || (JsonImporter = {}));
