var binding=require("./binding/"+process.platform+"-"+process.arch+"/atdaqnavi_dio.node");function atdaqnavi_dio(){}atdaqnavi_dio.prototype.get=function(i){return binding?binding.get(i):void 0},module.exports=new atdaqnavi_dio;
