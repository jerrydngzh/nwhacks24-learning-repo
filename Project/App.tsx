import React from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  StyleSheet,
  View, SafeAreaView
} from 'react-native';
import { MiMapView } from '@mappedin/react-native-sdk';


import { Mappedin, getVenue, MappedinLocation } from '@mappedin/react-native-sdk';



// See Trial API key Terms and Conditions
// https://developer.mappedin.com/guides/api-keys
const options = {
  venue: "657cc670040fcba69696e69e",
  key: "65a0422df128bbf7c7072349",
  secret: "5f72653eba818842c16c4fdb9c874ae02100ffced413f638b7bd9c65fd5b92a4"
  // venue: 'test title',
};

const App = () => {
  const [venueData, setVenueData] = React.useState<Mappedin>();

  React.useEffect(() => {
    async function init() {
      const venueData = await getVenue(options);
      setVenueData(venueData);
    }
    init();
  }, []);

  // if (!venueData) {
  //   return (
  //     <View style={styles.loading}>
  //       <Text>Loading</Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MiMapView
        style={{ flex: 1 }}
        key="mappedin"
        options={options}
      />
    </SafeAreaView>
  );
};

export default App;