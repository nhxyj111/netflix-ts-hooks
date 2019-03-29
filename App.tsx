// import { AppLoading } from "expo";
import React, { useEffect, useState } from "react";
import { StatusBar, Text, View } from "react-native";
import preloadImages from "./src/api/preloadImages";
import { cacheImages } from "./src/api/util";
import Stack from "./src/navigation/Stack";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages(preloadImages);

    await Promise.all([...imageAssets]).then(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadAssetsAsync();
  }, []);

  // if (isLoading) {
  //   return (
  //     <AppLoading
  //       onFinish={() => setIsLoading(false)}
  //       startAsync={loadAssetsAsync}
  //     />
  //   );
  // }

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading</Text>
    </View>;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Stack />
    </React.Fragment>
  );
};

export default App;
