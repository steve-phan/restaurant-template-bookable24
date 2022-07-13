import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import dayjs from 'dayjs';
import { DeliveryDining } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { DeliveryHeadingSt } from './DeliveryTime.styles';
import { useAppDispatch, useAppSelector } from '@bookable24/store/hooks';
import { setDeliveryTime } from '@bookable24/store/oder/oderSlice';

const hourNow = dayjs().hour();
const minutesNow = dayjs().minute();

const deliveryTimes = [
  '11:30',
  '11:45',
  '12:00',
  '12:15',
  '12:30',
  '12:45',
  '13:00',
  '13:15',
  '13:30',
  '13:45',
  '14:00',
  '14:15',
  '14:30',
  '14:45',
  '15:00',
  '15:15',
  '15:30',
  '15:45',
  '16:00',
  '16:15',
  '16:30',
  '16:45',
  '17:00',
  '17:15',
  '17:30',
  '17:45',
  '18:00',
  '18:15',
  '18:30',
  '18:45',
  '19:00',
  '19:15',
  '19:30',
  '19:45',
  '20:00',
  '20:15',
  '20:30',
  '20:45',
  '21:00',
  '21:15',
  '21:30',
  '21:45',
  '22:00',
  '22:15',
  '22:30',
  '22:45',
  '23:00',
  '23:15',
  '23:30',
];
const filterDeliveryTime = deliveryTimes.filter((time, index) => {
  const [hour, minutes] = time.split(':');
  if (minutesNow <= 30) {
    return Number(hour) - hourNow >= 1;
  } else {
    return (
      Number(hour) - hourNow > 1 ||
      (Number(hour) - hourNow === 1 && Number(minutes) >= 30)
    );
  }
});

export const deliveryTimesDefault = filterDeliveryTime[0];

export const DeliveryTime = () => {
  const [time, setTime] = React.useState(deliveryTimesDefault);

  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    const newTime = event.target.value as string;
    setTime(newTime);
    dispatch(setDeliveryTime(newTime));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <DeliveryHeadingSt>
        <DeliveryDining />
        Delivery Time
      </DeliveryHeadingSt>

      <FormControl fullWidth sx={{ minWidth: 120 }}>
        <InputLabel id='delivery-time-select-label'>Time</InputLabel>
        <Select
          labelId='delivery-time-select-label'
          id='delivery-time-select'
          value={time}
          label='Time'
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: '40vh',
                margin: '0 auto',
              },
            },
          }}
        >
          {filterDeliveryTime.map((item, index) => (
            <MenuItem value={item} key={index + item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
