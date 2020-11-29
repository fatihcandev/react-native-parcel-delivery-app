import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { IPicture } from 'types';
import { Box, Loading, StyledImage, StyledText, FAB, Icon } from 'components';

const Gallery = () => {
  const [selectedPictures, setSelectedPictures] = useState<Set<IPicture>>(new Set());
  const [pictures, setPictures] = useState<IPicture[]>([]);
  const [picNum, setPicNum] = useState<number>(4);
  const [fetchingPics, setFetchingPics] = useState<boolean>(true);
  const [previewMode, setPreviewMode] = useState<boolean>(false);
  const [showPicMenu, setShowPicMenu] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(true);
  const { width, height } = Dimensions.get('window');
  const navigator = useNavigation();

  useEffect(() => {
    async function getPictures() {
      try {
        const uploadedPictures = await AsyncStorage.getItem('uploadedPictures');
        if (uploadedPictures !== null) {
          const uploadedPicsJson = JSON.parse(uploadedPictures);
          console.log('cloud pics', uploadedPicsJson);
          for (const pic in uploadedPicsJson) {
            if (Object.prototype.hasOwnProperty.call(uploadedPicsJson, pic)) {
              const fileName = uploadedPicsJson[pic].fileName;
              const ref = storage().ref(`images/${fileName}`);
              const uri = await ref.getDownloadURL();
              setPictures((prev) => [
                ...prev,
                {
                  fileName,
                  uri,
                },
              ]);
            }
          }
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setRefreshing(false);
        setFetchingPics(false);
      }
    }
    if (refreshing) {
      getPictures();
    }
  }, [refreshing]);

  const togglePreviewMode = () => {
    setPicNum(previewMode ? 4 : 1);
    setPreviewMode((s) => !s);
  };

  const renderPicture = (pic: IPicture) => {
    const handlePress = () => {
      if (showPicMenu) {
        if (selectedPictures.has(pic)) {
          setSelectedPictures((prev) => {
            prev.delete(pic);
            return new Set(prev);
          });
        } else {
          setSelectedPictures((prev) => new Set(prev.add(pic)));
        }
      } else {
        togglePreviewMode();
      }
    };

    const handleLongPress = () => {
      setSelectedPictures((prev) => new Set(prev.add(pic)));
      setShowPicMenu(true);
    };
    return (
      <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress}>
        <Box width={width / 4} height={100} position="relative">
          <StyledImage
            resizeMethod="scale"
            source={{
              uri: pic.uri,
            }}
          />
          {selectedPictures.has(pic) && (
            <Box
              style={StyleSheet.absoluteFill}
              backgroundColor="overlay"
              justifyContent="center"
              alignItems="center"
            >
              <Icon name="check" color="white" />
            </Box>
          )}
        </Box>
      </TouchableOpacity>
    );
  };

  const renderPreviewPicture = (pic: IPicture) => {
    return (
      <Box {...{ width, height }} justifyContent="center" backgroundColor="black">
        <Box {...{ width }} height={400}>
          <StyledImage
            source={{
              uri: pic.uri,
            }}
          />
        </Box>
      </Box>
    );
  };

  const renderRefreshControl = () => (
    <RefreshControl
      {...{ refreshing }}
      onRefresh={() => {
        setRefreshing(true);
        setFetchingPics(true);
      }}
    />
  );

  return (
    <>
      {!fetchingPics ? (
        pictures.length === 0 ? (
          <Box flex={1} justifyContent="center" alignItems="center">
            <StyledText variant="h3">You don't have any pictures</StyledText>
          </Box>
        ) : (
          <SafeAreaView style={{ flex: 1, position: 'relative' }}>
            <>
              <Box
                height={75}
                padding="m"
                backgroundColor="yellowDark"
                flexDirection="row"
                alignItems="center"
                elevation={4}
              >
                <TouchableOpacity onPress={() => navigator.goBack()}>
                  <Box marginRight="s">
                    <Icon name="arrowLeft" color="black" />
                  </Box>
                </TouchableOpacity>
                <StyledText variant="h3">Cloud pictures</StyledText>
                {showPicMenu && (
                  <Box flex={1} flexDirection="row" justifyContent="flex-end">
                    <Box alignItems="center">
                      <Box marginBottom="s">
                        <Icon name="trash" color="black" />
                      </Box>
                      <StyledText variant="bodySecondary">Delete</StyledText>
                    </Box>
                  </Box>
                )}
              </Box>
              <FlatList
                refreshControl={renderRefreshControl()}
                data={pictures}
                numColumns={picNum}
                horizontal={previewMode}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                snapToInterval={previewMode ? width : undefined}
                renderItem={({ item }) =>
                  previewMode ? renderPreviewPicture(item) : renderPicture(item)
                }
                key={picNum}
                keyExtractor={(_, index) => index.toString()}
              />
              {previewMode && (
                <Box style={StyleSheet.absoluteFill}>
                  <TouchableOpacity onPress={togglePreviewMode}>
                    <Box padding="m">
                      <Icon name="arrowLeft" color="white" />
                    </Box>
                  </TouchableOpacity>
                </Box>
              )}
            </>
          </SafeAreaView>
        )
      ) : (
        <Loading />
      )}
      {!previewMode && !showPicMenu && (
        <FAB icon="camera" onPress={() => navigator.navigate('Camera')} />
      )}
    </>
  );
};

export default Gallery;
