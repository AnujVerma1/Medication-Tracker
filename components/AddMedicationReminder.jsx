import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/FirebaseConfig'; 
import { scheduleNotification } from '../service/NotificationService'; 



const AddMedicationReminder = async (medication) => {
  const docRef = doc(db, 'medication', medication.docId);

 
  const action = medication?.action || [];

 
  await updateDoc(docRef, {
    reminder: {
      time: medication?.when,
      date: medication?.selectedDate,
    },
    action: arrayUnion({
      status: 'Pending',  
      date: new Date().toISOString(),  
    })
  });


  const reminderTime = new Date(medication?.selectedDate);
  const [hours, minutes] = medication?.when?.split(':').map(Number); 
  reminderTime.setHours(hours);
  reminderTime.setMinutes(minutes);

 
  scheduleNotification(
    'Medication Reminder',
    `Time to take ${medication?.name}`,
    reminderTime
  );
};

export { AddMedicationReminder };
