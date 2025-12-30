// Place fonts/icon.ttf in your fonts/ directory and
// add the following to your pubspec.yaml
// flutter:
//   fonts:
//    - family: icon
//      fonts:
//       - asset: fonts/icon.ttf
import 'package:flutter/widgets.dart';

class Icon {
  Icon._();

  static const String _fontFamily = 'icon';

  static const IconData fileText = IconData(0xe922, fontFamily: _fontFamily);
  static const IconData cart = IconData(0xe93a, fontFamily: _fontFamily);
  static const IconData lifebuoy = IconData(0xe941, fontFamily: _fontFamily);
  static const IconData users = IconData(0xe972, fontFamily: _fontFamily);
  static const IconData search = IconData(0xe986, fontFamily: _fontFamily);
  static const IconData equalizer = IconData(0xe992, fontFamily: _fontFamily);
  static const IconData switch = IconData(0xe9b6, fontFamily: _fontFamily);
  static const IconData flag = IconData(0xe9cc, fontFamily: _fontFamily);
  static const IconData plus = IconData(0xea0a, fontFamily: _fontFamily);
  static const IconData cancelCircle = IconData(0xea0d, fontFamily: _fontFamily);
  static const IconData arrowRight2 = IconData(0xea3c, fontFamily: _fontFamily);
  static const IconData arrowLeft2 = IconData(0xea40, fontFamily: _fontFamily);
}
