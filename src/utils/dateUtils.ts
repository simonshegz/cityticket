export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatShortDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric' 
  };
  
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const formatTime = (timeString: string): string => {
  // Convert 24-hour format to 12-hour format
  // Assuming timeString is in format "HH:MM"
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  
  return `${hour12}:${minutes} ${ampm}`;
};

export const getDayOfWeek = (dateString: string): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  return days[date.getDay()];
};

export const getMonth = (dateString: string): string => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(dateString);
  return months[date.getMonth()];
};

export const getDayOfMonth = (dateString: string): number => {
  const date = new Date(dateString);
  return date.getDate();
};

export const isEventSoon = (dateString: string): boolean => {
  const eventDate = new Date(dateString);
  const currentDate = new Date();
  const differenceInDays = Math.floor((eventDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
  
  return differenceInDays <= 7 && differenceInDays >= 0;
};