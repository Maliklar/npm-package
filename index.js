module.exports = (() =>{
    console.log("Pakcage executed");

    // Wraps a string in an html tag
    String.prototype.wrap = function(string){
        return `<${string}>${this.toString()}</${string}`;
    }

    // Reverse a string
    String.prototype.reverse = function(){
        let res = "";
        for(let i = this.length-1; i >= 0 ; i--){
            res+=this.charAt(i);
        }
        return new String(res);
    }

    Array.prototype.delete = function(){
        while(this.length > 0 ) this.pop();
        return this;
    }
})();

