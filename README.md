# gulp

安装依赖： npm install

启动热更新： gulp 

整个项目压缩: gulp build
整个压缩后需要去改一下index.html的导入文件，因为css和js都压缩合并了

把lib文件夹和js文件夹里的js文件，按前后顺序以数组形式填到config.json里

lib文件在libArr对象里

js文件夹的文件在jsArr对象里