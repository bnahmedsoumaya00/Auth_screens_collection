import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormData } from '../types/form';
import InputField from './InputField';

interface FormFieldsProps {
  formData: FormData;
  errors: { passwordMatch: string };
  updateField: (field: keyof FormData, value: string) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({ formData, errors, updateField }) => {
  return (
    <View>
      <View style={styles.formRow}>
        <InputField
          label="First Name *"
          value={formData.firstName}
          onChangeText={(value) => updateField('firstName', value)}
          placeholder="Enter first name"
          containerStyle={styles.halfWidth}
        />
        <InputField
          label="Last Name *"
          value={formData.lastName}
          onChangeText={(value) => updateField('lastName', value)}
          placeholder="Enter last name"
          containerStyle={styles.halfWidth}
        />
      </View>

      <View style={styles.formRow}>
        <InputField
          label="Email *"
          value={formData.email}
          onChangeText={(value) => updateField('email', value)}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          containerStyle={styles.halfWidth}
        />
        <InputField
          label="Phone Number"
          value={formData.phone}
          onChangeText={(value) => updateField('phone', value)}
          placeholder="Enter phone"
          keyboardType="phone-pad"
          containerStyle={styles.halfWidth}
        />
      </View>

      <View style={styles.formRow}>
        <InputField
          label="Password *"
          value={formData.password}
          onChangeText={(value) => updateField('password', value)}
          placeholder="Enter password"
          secureTextEntry
          containerStyle={styles.halfWidth}
        />
        <InputField
          label="Confirm Password *"
          value={formData.confirmPassword}
          onChangeText={(value) => updateField('confirmPassword', value)}
          placeholder="Confirm password"
          secureTextEntry
          hasError={!!errors.passwordMatch}
          errorMessage={errors.passwordMatch}
          containerStyle={styles.halfWidth}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  halfWidth: {
    flex: 1,
  },
});

export default FormFields;