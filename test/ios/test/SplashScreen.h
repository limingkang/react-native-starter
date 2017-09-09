// .h文件主要是用来生命一些类和方法的.m文件引入它，并实现其要实现该方法的具体逻辑
//AppDelegate.h/m 中默认的方法有很多我们用到的application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
//意思是在应用程序启动后，要执行的委托调用

// 1. @interface --------> 等于java中的class
// 2. 类名后的冒号：---------> 等于java中的extends
// 3. 函数前面的减号-  ---------> 表示对象方法
// 函数前面的加号+  ---------> 表示类方法，等于java的static方法
// 4. 函数的返回类型和参数的类型必须用括号，形参用冒号：表示
#import "RCTBridgeModule.h"

@interface SplashScreen : NSObject<RCTBridgeModule>
+ (void)show;
@end