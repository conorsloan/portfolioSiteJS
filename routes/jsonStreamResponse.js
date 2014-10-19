/**
 * Created by conor on 19/10/2014.
 */

module.exports = function (JSONStream) {
    return {

        sendAsJsonString : function (data, res) {
            data.pipe(JSONStream.stringify()).pipe(res);
        },

        sendItemAsJsonString : function (data, res) {
            data.pipe(JSONStream.stringify(false)).pipe(res);
        }

    }
}