import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const HelloScreen = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from API
  const getAllEmployeesFromAPI = async () => {
    try {
      const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
      const json = await response.json();
      setEmployees(json.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getAllEmployeesFromAPI();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        {error ? (
          <Text style={styles.errorText}>Error: {error}</Text>
        ) : (
          employees.map((employee, index) => (
            <View key={index} style={styles.wrapperElement}>
              <View style={{ width: 215 }}>
                <Text style={styles.sHeader2}>
                  Name: <Text style={styles.sHeader}>{employee.employee_name}</Text>
                </Text>
                <Text style={styles.sHeader2}>
                  Age: <Text style={styles.sHeader}>{employee.employee_age}</Text>
                </Text>
                <Text style={styles.sHeader2}>
                  Salary: <Text style={styles.sHeader}>{employee.employee_salary}</Text>
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wrapper: {
    padding: 30,
  },
  wrapperElement: {
    height: 110,
    width: 330,
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#d9ffcc',
  },
  sHeader: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  sHeader2: {
    fontSize: 20,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HelloScreen;
