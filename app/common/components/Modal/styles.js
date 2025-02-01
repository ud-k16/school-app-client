import moderateScale from "@/app/utils/responsiveScale";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainerOverLay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContentDefaultStyle: {
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(20),
    alignSelf: "center",
    width: "80%",
    height: "80%",
  },
});
