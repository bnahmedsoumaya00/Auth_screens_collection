import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HeroSection: React.FC = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }}
      style={styles.imageSection}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']}
        style={styles.logoOverlay}
      >
        <Image
          source={require('../assets/images/odin-lined.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titleOdin}>ODIN</Text>
      </LinearGradient>
      
      <Text style={styles.photoCredit}>
        Photo by Halie West on Unsplash
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageSection: {
    height: 165,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
  },
  logo: {
    height: 60,
    width: 60,
    marginRight: 15,
  },
  titleOdin: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'NorseBold',
    letterSpacing: 3,
    textAlign: 'center',
    flex: 0,
  },
  photoCredit: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  },
});

export default HeroSection;