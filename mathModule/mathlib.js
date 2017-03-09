module.exports = function (){
    return {
        add: function(num1, num2) {
            var result = num1 + num2;
            return result
        },
        multiply: function(num1, num2) {
            var result = num1 * num2;
            return result
        },
        square: function(num) {
            var result = num * num;
            return result
        },
        random: function(num1, num2) {
            var rand = Math.floor(Math.random() * (num1 - num2) + num2);
            return rand;
        }
    }
};
