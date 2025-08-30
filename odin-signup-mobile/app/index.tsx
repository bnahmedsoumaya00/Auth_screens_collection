import { useFonts } from 'expo-font';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import HeroSection from '../components/HeroSection';
import SignUpForm from '../components/SignUpForm';

const OdinSignUpApp: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'NorseBold': 'https://db.onlinewebfonts.com/t/7d460b18433753a097e5bc2bad7c8dd9.ttf',
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <HeroSection />
        <SignUpForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
});

export default OdinSignUpApp;