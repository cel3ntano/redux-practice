import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = date => {
  return format(new Date(date), 'Pp', { addSuffix: true });
};

export const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
