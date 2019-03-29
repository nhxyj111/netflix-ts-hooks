import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { colors, images } from "../api/constants";
import mockData from "../mockdata/data";

interface IProps {
  dataset?: string;
  type?: string;
}

const ShowScroller: React.FC<IProps> = ({
  dataset = "dumbData",
  type = "rectangle"
}) => {
  const dataArray = Object.values((mockData as any)[dataset]);

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 4 }}
      data={dataArray as any}
      horizontal
      keyExtractor={(itemObj: { id: number; image: string }) =>
        itemObj.id.toString()
      }
      renderItem={itemObj => {
        const { item } = itemObj;

        let renderItem = <View style={styles[type as stylesKeys]} />;
        if (item.image) {
          renderItem = (
            <Image
              source={(images as any)[item.image]}
              style={styles[`${type}Image` as stylesKeys]}
            />
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

// type stylesKeys = 'rectangle' | 'rectangleImage' | 'round' | 'roundImage'
type stylesKeys = keyof typeof styles;

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: 131,
    marginRight: 8,
    width: 91
  },
  rectangleImage: {
    height: 131,
    marginRight: 8,
    resizeMode: "contain",
    width: 91
  },
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  },
  roundImage: {
    height: 96,
    marginRight: 8,
    resizeMode: "contain",
    width: 96
  }
});

export default ShowScroller;
