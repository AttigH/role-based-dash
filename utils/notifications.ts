import { notifications } from '@mantine/notifications';

interface NotificationProps {
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const showNotification = ({
  type,
  title,
  message,
  position = 'top-right',
}: NotificationProps) => {
  let color: string;

  //  colors based on the type
  switch (type) {
    case 'success':
      color = 'green';
      break;
    case 'error':
      color = 'red';
      break;
    case 'info':
      color = 'blue'; 
      break;
    default:
      color = 'gray'; 
  }

  notifications.show({
    title,
    message,
    color,
    position,
  });
};
