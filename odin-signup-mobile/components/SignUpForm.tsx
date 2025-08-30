import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { FormData } from '../types/form';
import FormFields from './FormFields';
import FormIntro from './FormIntro';
import SubmitButton from './SubmitButton';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    Alert.alert('Success', 'Account created successfully!');
  };

  return (
    <View style={styles.formSection}>
      <FormIntro />
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Let&apos;s do this!</Text>
        <FormFields 
          formData={formData} 
          errors={errors} 
          updateField={updateField} 
        />
        <SubmitButton onPress={handleSubmit} />
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink}>Log in</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formSection: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
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

export default SignUpForm;
