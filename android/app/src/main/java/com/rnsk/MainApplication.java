package com.rnsk;

import android.support.annotation.Nullable;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.horcrux.svg.SvgPackage;
import com.facebook.react.ReactPackage;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return Arrays.<ReactPackage>asList(
          new SvgPackage()
      );
  }
}