/**
 * Created by Administrator on 2017/8/13.
 */
(function(){
    miniConsole = {
        log:function(){
            //真正的代码略
            console.log(Array.prototype.join.call(arguments));
        }
    }
})();