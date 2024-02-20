import axios from "axios";

const RestApiUrl = 'http://localhost:8080/api/employees';
export const listEmployees = () => axios.get(RestApiUrl);

export const createEmployee = (employee) => axios.post(RestApiUrl, employee);

export const getEmployee = (employeeId) => axios.get(RestApiUrl + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(RestApiUrl + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(RestApiUrl + '/' + employeeId);