**React-Native Version: 0.47**

This project currently uses these dependencies:
- [react-native-tab-navigator](https://github.com/exponentjs/react-native-tab-navigator)
- [react-native-swiper](https://github.com/leecade/react-native-swiper)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)


## How to run it
1. 正常安装好react-native环境进入test目录
2. yarn install
3. react-native link
4. react-native run-android / run-ios

## 介绍
react-native-deprecated-custom-components用来做大的导航路由直接跳转到一个大全新的页面
react-native-scrollable-tab-view用来做动画切换tap页的
react-native-tab-navigator用来给每个大页面下面做底部导航路由的
由于没有mac导致ios没有引入，请自行引入文件测试


## 运行时候常见问题
1.react-native link关联原生图标的时候：
Error:Execution failed for task ':app:processDebugResources'java.io.IOException: Could not delete...
	From your react native folder run:	cd android && gradlew clean
	THEN:cd .. && react-native run-android
	For mac you may need to change gradlew to ./gradlew
	For the command prompt you may need to change the && to &
2.下载gradle问题
找到我们项目下的android/gradle/wrapper/gradle-wrapper.properties文件
设置变量distributionUrl=file\:///D:/gradle/gradle-2.14.1-all.zip，注意装的版本,这是我的安装地址
3.编译时候提示@Override不能覆盖...
找到app/src/main/java/com/test/MyReactPackage.java注释掉@Override，这是由于jdk版本问题1.5以上没事，所以最好不要注释升级jdk就行
app/src/main里面存放了一些底层原生需要使用的启动图和启动样式xml文件不要胡乱删除