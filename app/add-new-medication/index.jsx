
import { View, FlatList} from 'react-native';
import AddMedicationHeader from '../../components/AddMedicationHeader';
import AddMedicationForm from '../../components/AddMedicationForm';
import {styles} from '../../style/add_new_medication.style';

export default function AddNewMedication() {
  
  return (
    <View style={styles.container}>
  
        <AddMedicationHeader />
         
         <FlatList
           data={[]}
           ListHeaderComponent={
            <AddMedicationForm />
           }
           />
    </View>
  );
}


