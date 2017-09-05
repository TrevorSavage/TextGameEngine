//import {ArrayHelper} from "./arrayhelper";
/// <reference path="arrayhelper.ts" />
var InputParser;
(function (InputParser_1) {
    class InputParser {
        static parse(input) {
            let noun = "";
            let verb = "";
            let tokens = input.split(" ");
            for (let token of tokens) {
                if (ArrayHelper.ArrayHelper.includes(InputParser.ignoredTokens, token))
                    continue;
                else if (noun === "")
                    noun = token;
                else
                    verb = token;
            }
            return [verb, noun];
        }
    }
    InputParser.ignoredTokens = ["", " ", "the", "a", "an", "in", "over", "through", "up"];
})(InputParser || (InputParser = {}));
