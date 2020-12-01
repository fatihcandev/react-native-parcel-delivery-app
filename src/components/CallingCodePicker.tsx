import React, { useEffect, useState } from 'react';
import { FlatList, Keyboard, TextInput } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, { Easing, useValue } from 'react-native-reanimated';

import { countries } from 'data';
import Box from './Box';
import StyledImage from './StyledImage';
import StyledText from './StyledText';
import AnimatedBox from './AnimatedBox';
import Icon from './Icon';

const renderItem = (item: any, onItemSelect: (v: string) => void) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemSelect(item.callingCodes[0])}>
      <Box
        flexDirection="row"
        alignItems="center"
        paddingBottom="m"
        marginBottom="m"
        borderBottomColor="greyLight"
        borderBottomWidth={1}
      >
        <Box width={40} height={30} borderRadius="s" marginRight="m">
          <StyledImage
            source={{
              uri: `https://www.countryflags.io/${item.alpha2Code.toLowerCase()}/shiny/64.png`,
            }}
            resizeMethod="scale"
          />
        </Box>
        <Box width={60} marginRight="m">
          <StyledText variant="h3Light" textAlign="left">{`+${item.callingCodes[0]}`}</StyledText>
        </Box>
        <StyledText variant="h3Light">{item.name}</StyledText>
      </Box>
    </TouchableWithoutFeedback>
  );
};

interface ICallingCodePickerProps {
  selectedCallingCode: string;
  selectedCountryCode: string;
  isPhoneInputFocused?: boolean;
  onChange: (v: string) => void;
}

const CallingCodePicker: React.FC<ICallingCodePickerProps> = ({
  selectedCallingCode,
  selectedCountryCode,
  isPhoneInputFocused,
  onChange,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [countriesData, setCountriesData] = useState<any[]>([]);
  const pickerOpacity = useValue(0);
  const { timing } = Animated;

  const animConfig = {
    duration: 200,
    easing: Easing.inOut(Easing.ease),
  };

  const handleTogglePicker = () => {
    if (showPicker) {
      timing(pickerOpacity, { ...animConfig, toValue: 0 }).start();
      setTimeout(() => {
        setShowPicker(false);
        Keyboard.dismiss();
      }, 250);
    } else {
      setShowPicker(true);
      setTimeout(() => {
        timing(pickerOpacity, { ...animConfig, toValue: 1 }).start();
      }, 50);
    }
  };

  const handleItemSelect = (v: string) => {
    onChange(v);
    setShowPicker(false);
    setSearchValue('');
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const filtered = countries.filter(
        country =>
          country.name.toLowerCase().includes(searchValue) ||
          country.name.includes(searchValue) ||
          country.callingCodes[0] === searchValue,
      );
      setCountriesData(filtered);
    } else {
      setCountriesData(countries);
    }
  }, [searchValue]);

  return (
    <>
      <Box position="absolute" left={0} bottom={20}>
        <TouchableOpacity onPress={handleTogglePicker}>
          <Box flexDirection="row" alignItems="center">
            <Box width={40} height={30} borderRadius="s" marginRight="s">
              <StyledImage
                source={{
                  uri: `https://www.countryflags.io/${selectedCountryCode}/shiny/64.png`,
                }}
                resizeMethod="scale"
              />
            </Box>
            <StyledText variant="h3Light">{`+${selectedCallingCode}`}</StyledText>
          </Box>
        </TouchableOpacity>
      </Box>
      {showPicker && !isPhoneInputFocused && (
        <AnimatedBox
          position="absolute"
          top={45}
          zIndex={9999}
          paddingHorizontal="m"
          width="100%"
          height={300}
          overflow="hidden"
          backgroundColor="white"
          borderRadius="s"
          style={{
            opacity: pickerOpacity,
          }}
        >
          <Box position="relative">
            <Box position="absolute" left={0} top={10}>
              <Icon name="search" color="#C4C4C4" />
            </Box>
            <TextInput
              placeholder="Country or code"
              style={{
                paddingLeft: 30,
                borderBottomColor: '#D5D5D5',
                borderBottomWidth: 1,
                fontFamily: 'Poppins-Medium',
              }}
              value={searchValue}
              onChangeText={v => setSearchValue(v)}
            />
            {searchValue.length > 0 && (
              <Box
                position="absolute"
                right={0}
                top={10}
                backgroundColor="greyLight"
                style={{ borderRadius: 12, padding: 2 }}
              >
                <TouchableWithoutFeedback onPress={() => setSearchValue('')}>
                  <Icon name="close" color="white" width={20} height={20} />
                </TouchableWithoutFeedback>
              </Box>
            )}
          </Box>
          <FlatList
            data={countriesData}
            renderItem={({ item }) => renderItem(item, handleItemSelect)}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            style={{
              paddingVertical: 8,
            }}
          />
        </AnimatedBox>
      )}
    </>
  );
};

export default CallingCodePicker;
