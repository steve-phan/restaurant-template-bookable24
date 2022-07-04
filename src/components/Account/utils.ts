import { TFunction } from 'gatsby-plugin-react-i18next';
import * as yup from 'yup';
// import dayjs from 'dayjs';

// import { IShop } from './store/shop/shop.types';

// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';
// import isToday from 'dayjs/plugin/isToday';
// import isTomorrow from 'dayjs/plugin/isTomorrow';
// import isYesterday from 'dayjs/plugin/isYesterday';
// // dependent on utc plug
// /**
//  * @TODO : Working with timezone
//  */
// dayjs.extend(isToday);
// dayjs.extend(isTomorrow);
// dayjs.extend(isYesterday);
// dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.tz.setDefault('Europe/Berlin');

// export const dayjsModified = dayjs;

// export const allSlots = [...morningSlots, ...afternoonSlots];
// export const validateEmail = (email: string) => {
//   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regex.test(email);
// };
export const validatePhone = (phoneNumber: string) => {
  const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return regex.test(phoneNumber);
};

// export const getRandomColor = () => {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// export const getShopName = (emailVerify: string, shopList: IShop[]) => {
//   return shopList?.find(({ email }: IShop) => email.toLowerCase() === emailVerify.toLowerCase())?.shopId;
// };

// export interface ItimeAgoMess {
//   second: string;
//   minute: string;
//   halfhour: string;
//   hour: string;
//   hours: string;
//   day: string;
//   week: string;
//   month: string;
// }

// export const timeAgo = (dateParam: Date, t: ItimeAgoMess) => {
//   if (!dateParam) {
//     return null;
//   }

//   const date = typeof dateParam === 'object' ? dateParam.getTime() : new Date(dateParam).getTime();

//   const DAY_IN_MS = 86400000;
//   const today: number = new Date().getTime();
//   const yesterday = new Date(today - DAY_IN_MS);
//   const seconds = Math.round((today - date) / 1000);
//   const minutes = Math.round(seconds / 60);
//   // const isToday = today.toDateString() === date.toDateString()
//   // const isYesterday = yesterday.toDateString() === date.toDateString()
//   // const isThisYear = today.getFullYear() === date.getFullYear()

//   switch (true) {
//     case seconds < 60:
//       return `${seconds}  ${t.second}`;
//     case seconds < 90:
//       return t.minute;
//     case minutes < 30:
//       return t.halfhour;
//     case minutes < 60:
//       return t.hour;
//     case minutes / 60 < 24:
//       return `${Math.round(minutes / 60)} ${t.hours}`;
//     case minutes / 60 / 24 < 7:
//       return ` ${Math.round(minutes / 60 / 24)} ${t.day}`;
//     case minutes / 60 / 24 / 7 < 1:
//       return `${Math.round(minutes / 60 / 24 / 7)} ${t.week}`;
//     default:
//       return t.month;
//   }
// };

// export const filterBookings = (allTermins: ITermin[], today: string) =>
//   allTermins.filter((termin: ITermin) => dayjs(termin.selectedDate).format('MMM DD') === today).sort((a: ITermin, b: ITermin) => Number(a.selectedSlot) - Number(b.selectedSlot));

// export const getTodayBookings = (allTermins: ITermin[]) => allTermins.filter((termin) => dayjs(termin?.selectedDate).isToday());

// export const getTomorrowBookings = (allTermins: ITermin[]) => allTermins.filter((termin) => dayjs(termin?.selectedDate).isTomorrow());
// /**
//  *
//  * @param allTermins : allTermins pass in
//  * @param date : the termins of this date
//  * @returns : the termins
//  */

// export const getDateBookings = (allTermins: ITermin[], date: Date | null) => {
//   let pickedDay = date && new Date(date);
//   const day = dayjs(pickedDay).format('MMM DD');
//   return filterBookings(allTermins, day);
// };

export const getSignUpSchema = (t: TFunction<string | string[], undefined>) => {
  return yup.object({
    fullName: yup
      .string()
      .trim()
      .required(t('booking.validation.error.fullName')),
    email: yup
      .string()
      .trim()
      .email(t('booking.validation.error.email'))
      .required(t('booking.validation.error.email')),
    password: yup
      .string()
      .trim()
      .min(6, t('booking.validation.error.password'))
      .required(t('booking.validation.error.password')),
    phone: yup
      .string()
      .trim()
      .test('valid-phone', t('booking.validation.error.phone'), (tel) => {
        return validatePhone(tel as string);
      })
      .required(t('booking.validation.error.phone')),
    postCode: yup
      .number()
      .typeError('darf nur Nummer enthalten..')
      .test(
        'postCode',
        'Muss genau 5 Zeichen lang sein',
        (val) => !!val && val?.toString().length === 5
      )
      .required(t('account.error.postCode')),
    street: yup
      .string()
      .matches(/[a-zA-Z]/, 'darf nur Buchstaben enthalten..')
      .trim()
      .required(t('account.error.street')),
    houseNumber: yup
      .string()
      .typeError(t('account.error.houseNumber'))
      .required(t('account.error.houseNumber')),
    city: yup
      .string()
      .matches(/[a-zA-Z]/, 'darf nur Buchstaben enthalten..')
      .trim()
      .required(t('account.error.city')),
  });
};

export const getSignInSchema = (t: TFunction<string | string[], undefined>) => {
  return yup.object({
    email: yup
      .string()
      .trim()
      .email(t('booking.validation.error.email'))
      .required(t('booking.validation.error.email')),
    password: yup
      .string()
      .trim()
      .required(t('booking.validation.error.password')),
  });
};

export const getChangePasswordSchema = (
  t: TFunction<string | string[], undefined>
) => {
  return yup.object({
    password: yup
      .string()
      .trim()
      .min(6, t('booking.validation.error.password'))
      .required(t('booking.validation.error.password')),
    confirmpassword: yup
      .string()
      .trim()
      .min(6, t('booking.validation.error.password'))
      .required(t('booking.validation.error.password')),
  });
};

export const getAddressSchema = (
  t: TFunction<string | string[], undefined>
) => {
  return yup.object({
    phone: yup
      .number()
      .typeError(t('account.error.phone'))
      .test('valid-phone', t('account.error.phone'), (tel) => {
        return validatePhone(tel as unknown as string);
      })
      .required(t('account.error.phone')),
    houseNumber: yup
      .string()
      .typeError(t('account.error.houseNumber'))
      .required(t('account.error.houseNumber')),
    postCode: yup
      .number()
      .typeError('darf nur Nummer enthalten..')
      .test(
        'postCode',
        'Muss genau 4 bis 6 Zeichen lang sein',
        (val) =>
          !!val && val?.toString().length >= 4 && val?.toString().length <= 6
      )
      .required(t('account.error.postCode')),
    street: yup
      .string()
      .matches(/[a-zA-Z]/, 'darf nur Buchstaben enthalten..')
      .trim()
      .required(t('account.error.street')),
    city: yup
      .string()
      .matches(/[a-zA-Z]/, 'darf nur Buchstaben enthalten..')
      .trim()
      .required(t('account.error.city')),
  });
};
