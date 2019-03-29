import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Image } from "react-native";

export const cacheFonts = (
  fonts: Array<string | { [name: string]: string | number | Asset }>
) => {
  const mappedFonts = fonts.map(font => Font.loadAsync(font));
  return mappedFonts;
};

export const cacheImages = (images: { [name: string]: any }) => {
  const imagesArray = Object.values(images);

  return imagesArray.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }
    console.log("<><><><><><>");
    Asset.fromModule(image).downloadAsync();
  });
};
