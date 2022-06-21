import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

export const RestaurantName = 'MaisonTom';

export const restaurantInfos = {
  address: {
    icon: <HomeOutlinedIcon />,
    heading: 'Address',
    descriptions: ['Yorckstraße 32, ', '76185 Karlsruhe'],
  },
  openTimes: {
    icon: <ScheduleOutlinedIcon />,
    heading: 'Opening Times',
    descriptions: ['Mon-Sat : 11-22', 'Sun : closed'],
  },
  contact: {
    icon: <ContactPhoneOutlinedIcon />,
    heading: 'Contact',
    descriptions: ['hello@shopdomain.com', '0308003256328'],
  },
};
