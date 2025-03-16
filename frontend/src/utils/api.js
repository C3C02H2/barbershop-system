import axios from 'axios';

// Използваме променлива от средата, или API URL, или fallback към localhost
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth API
export const login = (credentials) => API.post('/auth/login', credentials);
export const getCurrentUser = () => API.get('/auth/me/');
export const changePassword = (passwords) => API.put('/auth/change-password', passwords);

// Services API
export const getServices = () => API.get('/services/');
export const getService = (id) => API.get(`/services/${id}/`);
export const createService = (data) => API.post('/services/', data);
export const updateService = (id, data) => API.put(`/services/${id}/`, data);
export const deleteService = (id) => API.delete(`/services/${id}/`);

// Appointments API
export const getAppointments = () => API.get('/appointments/');
export const getAppointment = (id) => API.get(`/appointments/${id}/`);
export const createAppointment = (appointment) => API.post('/appointments/', appointment);
export const updateAppointment = (id, appointment) => API.put(`/appointments/${id}/`, appointment);
export const deleteAppointment = (id) => API.delete(`/appointments/${id}/`);
export const getAvailableSlots = (date, serviceId) => 
  API.get(`/appointments/available-slots/?date=${date}&service_id=${serviceId}`);
export const getAppointmentStats = (startDate, endDate) => {
  let url = '/appointments/admin/stats/';
  
  // Добавяме параметри за дата, ако са предоставени
  if (startDate || endDate) {
    url += '?';
    if (startDate) {
      url += `start_date=${startDate}`;
    }
    if (startDate && endDate) {
      url += '&';
    }
    if (endDate) {
      url += `end_date=${endDate}`;
    }
  }
  
  return API.get(url);
};

// Business Hours API
export const getBusinessHours = () => API.get('/appointments/business-hours/');
export const setBusinessHours = (hours) => API.post('/appointments/business-hours/', hours);

// Blocked Dates API
export const getBlockedDates = () => API.get('/appointments/blocked-dates/');
export const addBlockedDate = (date) => API.post('/appointments/blocked-dates/', date);
export const removeBlockedDate = (id) => API.delete(`/appointments/blocked-dates/${id}/`);

// Gallery API
export const getGalleryImages = () => API.get('/gallery/');
export const getGalleryImage = (id) => API.get(`/gallery/${id}/`);
export const uploadGalleryImage = (formData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return API.post('/gallery/', formData, config);
};
export const updateGalleryImage = (id, formData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return API.put(`/gallery/${id}/`, formData, config);
};
export const deleteGalleryImage = (id) => API.delete(`/gallery/${id}/`);

// Additional API
export const register = (data) => API.post('/auth/register/', data);
export const getMe = () => API.get('/auth/me/'); 