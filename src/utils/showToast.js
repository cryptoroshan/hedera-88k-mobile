import Toast from "react-native-simple-toast";

const showToast = (
  text = "",
  duration = 0,
  gravity = 0,
) => {
  let gravityNum;
  switch (gravity) {
    case 0:
      gravityNum = Toast.BOTTOM;
      break;
    case 1:
      gravityNum = Toast.CENTER;
      break;
    default:
      gravityNum = Toast.TOP;
  }

  Toast.showWithGravity(text, duration, gravityNum);
};

export default showToast;