import moment from "moment";

export const formatDate = (date: moment.Moment | null) => (date ? date.format('MM/DD/YYYY') : '');

export const nairaFormat = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'NGN',
  });
  
  export const formatNumberToNaira = (number: number | string) => {
    const convertToNumber = Number(number);
    return nairaFormat.format(convertToNumber);
  };