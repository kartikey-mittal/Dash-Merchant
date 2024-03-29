import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontLoader from '../../FontLoader';

const ProgressBar = () => {
  const [step, setStep] = useState(2);

  const startAnimation = () => {
    setStep(step + 1);
  };

  return (
    <FontLoader>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',margin:5,marginTop:10 }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ backgroundColor: step >= 1 ? '#7DC498' : '#fff', padding: 10, borderRadius: 50, borderWidth: 2, borderColor: '#7DC498' }}>
          <Ionicons name="checkmark" size={24} color={step >= 1 ? "white" : "yellow"} />
        </View>
        <Text style={{ color: step >= 1 ? 'green' : 'black', fontWeight: step >= 1 ? 'bold' : 'normal' ,fontFamily:"DMSansR"}}>Placed</Text>
        
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: step >= 2 ? 'green' : 'gray' }} />
      <View style={{ alignItems: 'center' }}>
        <View style={{ backgroundColor: step >= 2 ? '#7DC498' : '#fff', padding: 10, borderRadius: 50, borderWidth: 2, borderColor: '#7DC498' }}>
          <Ionicons name="checkmark" size={24} color={step >= 2 ? "white" : "black"} />
        </View>
        <Text style={{ color: step >= 2 ? 'green' : 'black', fontWeight: step >= 2 ? 'bold' : 'normal' ,fontFamily:"DMSansR"}}>Confirmed</Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: step >= 3 ? 'green' : 'gray' }} />
      <View style={{ alignItems: 'center' }}>
        <View style={{ backgroundColor: step >= 3 ? '#7DC498' : '#fff', padding: 10, borderRadius: 50, borderWidth: 2, borderColor: '#7DC498' }}>
          <Ionicons name="checkmark" size={24} color={step >= 3 ? "white" : "black"} />
        </View>
        <Text style={{ color: step >= 3 ? 'green' : 'black', fontWeight: step >= 3 ? 'bold' : 'normal' ,fontFamily:"DMSansR"}}>Dispacthed</Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: step >= 4 ? 'green' : 'gray' }} />
      <View style={{ alignItems: 'center' }}>
        <View style={{ backgroundColor: step >= 4 ? '#7DC498' : '#fff', padding: 10, borderRadius: 50, borderWidth: 2, borderColor: '#7DC498' }}>
          <Ionicons name="checkmark" size={24} color={step >= 4 ? "white" : "black"} />
        </View>
        <Text style={{ color: step >= 4 ? 'green' : 'black', fontWeight: step >= 4 ? 'bold' : 'normal' ,fontFamily:"DMSansR"}}>Delivered</Text>
      </View>
    </View>
    </FontLoader>
  );
};

export default ProgressBar;
