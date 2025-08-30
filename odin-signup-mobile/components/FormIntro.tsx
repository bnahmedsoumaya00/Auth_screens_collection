import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormIntro: React.FC = () => {
  return (
    <View style={styles.intro}>
      <Text style={styles.introText}>
        This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. Sign up <Text style={styles.italic}>now</Text> to get started.
      </Text>
      <Text style={styles.introText}>
        You <Text style={styles.italic}>know</Text> you want to.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    marginBottom: 24,
  },
  introText: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 8,
    fontWeight: '600',
    color: '#333',
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default FormIntro;