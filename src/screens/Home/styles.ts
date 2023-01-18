import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    color: '#000',
    paddingBottom: 30
  },
  content: {
    padding: 24,
    height: '100%'
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 20,
  },
  inputGroup:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 0,
    borderBottomColor: '#c1c1c1',
    borderBottomWidth: 1,
    paddingBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 5,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    padding: 16,
    fontSize: 16,
    flex: 1, 
    marginRight: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    padding: 16,
    borderRadius: 8,
    width: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  todoList: {
    marginTop: 16,
    flexDirection: 'column',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    color: '#000',
    marginBottom: 8,
  },
  empty: {
    marginTop: 16,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
