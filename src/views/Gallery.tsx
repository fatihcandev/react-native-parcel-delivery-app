import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CameraRoll from '@react-native-community/cameraroll';
import storage from '@react-native-firebase/storage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPicture } from 'types';
import { Box, Loading, StyledImage, StyledText, FAB, Icon, UploadIndicator } from 'components';

const Gallery = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedPictures, setSelectedPictures] = useState<Set<IPicture>>(new Set());
  const [pictures, setPictures] = useState<IPicture[]>([]);
  const [picNum, setPicNum] = useState<number>(4);
  const [fetchingPics, setFetchingPics] = useState<boolean>(true);
  const [previewMode, setPreviewMode] = useState<boolean>(false);
  const [showPicMenu, setShowPicMenu] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(true);
  const { width, height } = Dimensions.get('window');
  const navigator = useNavigation();

  const handleUpload = async () => {
    const selectedPicturesArr = Array.from(selectedPictures);
    setUploading(true);
    for (let i = 0; i < selectedPicturesArr.length; i++) {
      const pic = selectedPicturesArr[i];
      const { fileName, uri } = pic;
      const ref = storage().ref(`images/${fileName}`);
      try {
        const task = await ref.putFile(uri);
        if (task.state === 'success') {
          console.log('uploaded!');
          try {
            const preUploadedPics = await AsyncStorage.getItem('uploadedPictures');
            if (preUploadedPics !== null) {
              const picsToUpload = [...JSON.parse(preUploadedPics), { fileName }];
              const uploadedPics = JSON.stringify(picsToUpload);
              await AsyncStorage.setItem('uploadedPictures', uploadedPics);
            } else {
              const uploadedPics = JSON.stringify([
                {
                  fileName,
                },
              ]);
              await AsyncStorage.setItem('uploadedPictures', uploadedPics);
            }
          } catch (error) {
            console.warn(error);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
    setSelectedPictures(new Set());
    setUploading(false);
  };

  useEffect(() => {
    if (selectedPictures.size === 0) {
      setShowPicMenu(false);
    }
  }, [selectedPictures.size]);

  useEffect(() => {
    async function getPictures() {
      try {
        const pics = await CameraRoll.getPhotos({
          first: 4,
          include: ['filename'],
        });
        const picsUriArr = pics.edges.map(e => {
          const { filename, uri } = e.node.image;
          return {
            fileName: filename,
            uri,
          } as IPicture;
        });
        setPictures(picsUriArr);
      } catch (error) {
        console.warn(error);
      } finally {
        setFetchingPics(false);
        setRefreshing(false);
      }
    }
    if (refreshing) {
      getPictures();
    }
  }, [refreshing]);

  const togglePreviewMode = () => {
    setPicNum(previewMode ? 4 : 1);
    setPreviewMode(s => !s);
  };

  const handlePress = (pic: IPicture) => {
    if (showPicMenu) {
      if (selectedPictures.has(pic)) {
        setSelectedPictures(prev => {
          prev.delete(pic);
          return new Set(prev);
        });
      } else {
        setSelectedPictures(prev => new Set(prev.add(pic)));
      }
    } else {
      togglePreviewMode();
    }
  };

  const renderPicture = (pic: IPicture) => {
    const handleLongPress = () => {
      setSelectedPictures(prev => new Set(prev.add(pic)));
      setShowPicMenu(true);
    };
    return (
      <TouchableOpacity onPress={() => handlePress(pic)} onLongPress={handleLongPress}>
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
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} refreshControl={renderRefreshControl()}>
              <Box flex={1} justifyContent="center" alignItems="center">
                <StyledText variant="h3">You don't have any pictures</StyledText>
              </Box>
            </ScrollView>
          </SafeAreaView>
        ) : (
          <SafeAreaView style={{ flex: 1, position: 'relative' }}>
            <>
              {!previewMode && (
                <Box
                  height={75}
                  padding="m"
                  backgroundColor="yellowDark"
                  flexDirection="row"
                  alignItems="center"
                  elevation={4}
                >
                  <StyledText variant="h3">Gallery</StyledText>
                  <Box flex={1} flexDirection="row" justifyContent="flex-end">
                    {showPicMenu && (
                      <TouchableOpacity onPress={handleUpload}>
                        <Box alignItems="center" marginRight="m">
                          <Box marginBottom="s">
                            <Icon name="upload" color="black" />
                          </Box>
                          <StyledText variant="bodySecondary">Upload to cloud</StyledText>
                        </Box>
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity onPress={() => navigator.navigate('CloudGallery')}>
                      <Box alignItems="center">
                        <Box marginBottom="s">
                          <Icon name="gallery" color="black" />
                        </Box>
                        <StyledText variant="bodySecondary">Cloud photos</StyledText>
                      </Box>
                    </TouchableOpacity>
                  </Box>
                </Box>
              )}
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
              {uploading && <UploadIndicator />}
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
