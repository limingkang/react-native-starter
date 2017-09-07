package com.test.util;

import android.app.Activity;
import android.app.Dialog;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.lang.ref.WeakReference;

/**
 * Created by limingkang on 09/06/17.
 */

public class SplashScreenModule extends ReactContextBaseJavaModule{


    public SplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SplashScreen";
    }

    @ReactMethod
    public void hide(){
        SplashScreen.hide(getCurrentActivity());
    }

}
