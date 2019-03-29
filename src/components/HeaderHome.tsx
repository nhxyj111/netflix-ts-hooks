import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { colors, device, fonts, images } from "../api/constants";
import TouchText from "./TouchText";

interface IProps extends NavigationInjectedProps {
  show: boolean;
  all?: boolean;
  movies?: boolean;
  myList?: boolean;
  shows?: boolean;
}

const HeaderHome: React.FC<IProps> = ({
  all = true,
  navigation,
  movies = false,
  myList = false,
  shows = false,
  show
}) => {
  // const [top, setTop] = useState(new Animated.Value(0));
  const top = useRef(new Animated.Value(0));

  useEffect(() => {
    if (show) {
      Animated.timing(top.current, { duration: 200, toValue: 0 }).start();
    } else {
      Animated.timing(top.current, { duration: 200, toValue: -100 }).start();
    }
  }, [show]);

  return (
    <Animated.View style={[styles.container, { top: top.current }]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("HomeMain")}>
        <Image source={images.netflixTransparent} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.containerMenu}>
        {all && (
          <React.Fragment>
            <TouchText
              onPress={() => navigation.navigate("HomeTvShows")}
              text="TV Shows"
              textStyle={styles.text}
            />
            <TouchText
              onPress={() => navigation.navigate("HomeMovies")}
              text="Movies"
              textStyle={styles.text}
            />
            <TouchText
              onPress={() => navigation.navigate("HomeMyList")}
              text="My List"
              textStyle={styles.text}
            />
          </React.Fragment>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: colors.black20,
    flexDirection: "row",
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30,
    position: "absolute",
    width: "100%",
    zIndex: 10
  },
  logo: {
    height: 35,
    marginRight: 48,
    width: 20
  },
  containerMenu: {
    alignItems: "center",
    flexDirection: "row",
    height: 35,
    flex: 1
  },
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
    marginRight: 24
  }
});

export default HeaderHome;
