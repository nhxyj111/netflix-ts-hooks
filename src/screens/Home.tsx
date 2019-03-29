import React, { useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { gStyle } from "../api/constants";
import Cast from "../components/Cast";
import HeaderHome from "../components/HeaderHome";
import PromotionBanner from "../components/PromotionBanner";
import ShowScroller from "../components/ShowScroller";

const Home: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const offset = useRef<number>(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < offset.current;

    if (show !== showHeader || offset.current <= 0) {
      // account for negative value with "bounce" offset
      if (offset.current <= 0) show = true;
      setShowHeader(show);
    }

    offset.current = currentOffset;
  };

  return (
    <View style={gStyle.container}>
      <HeaderHome navigation={navigation} show={showHeader} />

      <ScrollView bounces onScroll={onScroll} scrollEventThrottle={16}>
        <PromotionBanner />

        <Text style={gStyle.heading}>Previews</Text>
        <ShowScroller dataset="previews" type="round" />

        <Text style={gStyle.heading}>My List</Text>
        <ShowScroller dataset="myList" />

        <Text style={gStyle.heading}>Popular on Netflix</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Trending Now</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Watch It Again</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>NETFLIX ORIGINALS</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Documentaries</Text>
        <ShowScroller />

        <View style={gStyle.spacer24} />
      </ScrollView>

      <Cast navigation={navigation} />
    </View>
  );
};

export default Home;
