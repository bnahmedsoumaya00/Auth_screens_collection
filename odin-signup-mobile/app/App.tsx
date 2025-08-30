import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const OdinSignUpApp: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'NorseBold': 'https://db.onlinewebfonts.com/t/7d460b18433753a097e5bc2bad7c8dd9.ttf',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    passwordMatch: '',
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Check password match in real-time
    if (field === 'password' || field === 'confirmPassword') {
      const password = field === 'password' ? value : formData.password;
      const confirmPassword = field === 'confirmPassword' ? value : formData.confirmPassword;
      
      if (confirmPassword && password !== confirmPassword) {
        setErrors(prev => ({ ...prev, passwordMatch: 'Passwords do not match' }));
      } else {
        setErrors(prev => ({ ...prev, passwordMatch: '' }));
      }
    }
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Success
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => console.log('Account created:', formData) }
    ]);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Image Section */}
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

        {/* Form Section */}
        <View style={styles.formSection}>
          <View style={styles.intro}>
            <Text style={styles.introText}>
              This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. Sign up <Text style={styles.italic}>now</Text> to get started.
            </Text>
            <Text style={styles.introText}>
              You <Text style={styles.italic}>know</Text> you want to.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Lets do this!</Text>
            
            <View style={styles.formRow}>
              <View style={[styles.formGroup, styles.halfWidth]}>
                <Text style={styles.label}>First Name *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.firstName}
                  onChangeText={(value) => updateField('firstName', value)}
                  placeholder="Enter first name"
                />
              </View>
              
              <View style={[styles.formGroup, styles.halfWidth]}>
                <Text style={styles.label}>Last Name *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.lastName}
                  onChangeText={(value) => updateField('lastName', value)}
                  placeholder="Enter last name"
                />
              </View>
            </View>

            <View style={styles.formRow}>
              <View style={[styles.formGroup, styles.halfWidth]}>
                <Text style={styles.label}>Email *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.email}
                  onChangeText={(value) => updateField('email', value)}
                  placeholder="Enter email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
              <View style={[styles.formGroup, styles.halfWidth]}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  value={formData.phone}
                  onChangeText={(value) => updateField('phone', value)}
                  placeholder="Enter phone"
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <View style={styles.formRow}>
              <View style={[styles.formGroup, styles.halfWidth]}>
                <Text style={styles.label}>Password *</Text>
                <TextInput
                  style={styles.input}
                  value={formData.password}
                  onChangeText={(value) => updateField('password', value)}
                  placeholder="Enter password"
                  secureTextEntry
                />
              </View>
              
              <View style={[styles.formGroup, styles.halfWidth]}>
                <Text style={styles.label}>Confirm Password *</Text>
                <TextInput
                  style={[
                    styles.input,
                    errors.passwordMatch ? styles.inputError : null
                  ]}
                  value={formData.confirmPassword}
                  onChangeText={(value) => updateField('confirmPassword', value)}
                  placeholder="Confirm password"
                  secureTextEntry
                />
                {errors.passwordMatch ? (
                  <Text style={styles.errorText}>{errors.passwordMatch}</Text>
                ) : null}
              </View>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Create Account</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>
              Already have an account?{' '}
              <Text style={styles.loginLink}>Log in</Text>
            </Text>
          </View>
        </View>
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
  formSection: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
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
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.13,
    shadowRadius: 8,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  formRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  formGroup: {
    flex: 1,
  },
  halfWidth: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#374151',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#596D48',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  loginLink: {
    color: '#596D48',
    fontWeight: 'bold',
  },
});

export default OdinSignUpApp;