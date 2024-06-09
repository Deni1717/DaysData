import { formatDateLastDay } from '../../utils/constants';

export const dateRangeFiltersList = [
  {
    label: 'Yesterday',
    getDate: () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      return { from: yesterday, to: yesterday };
    }
  },
  {
    label: 'Last 7 Days',
    getDate: () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      const startDay = new Date(new Date().setDate(new Date().getDate() - 7));
      return { from: startDay, to: yesterday };
    }
  },
  {
    label: 'Last 14 Days',
    getDate: () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      const startDay = new Date(new Date().setDate(new Date().getDate() - 14));
      return { from: startDay, to: yesterday };
    }
  },
  {
    label: 'Last 30 Days',
    getDate: () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      const startDay = new Date(new Date().setDate(new Date().getDate() - 30));
      return { from: startDay, to: yesterday };
    }
  },
  {
    label: 'Last Month',
    getDate: () => {
      const monthMsc = new Date().setMonth(new Date().getMonth() - 1);
      const monthEnd = new Date(formatDateLastDay(new Date(monthMsc)));
      const monthStart = new Date(new Date(monthMsc).setDate(1));
      return { from: monthStart, to: monthEnd };
    }
  },
  {
    label: 'Current MTD',
    getDate: () => {
      const monthStart = new Date(new Date().setDate(1));
      return { from: monthStart, to: new Date() };
    }
  },
  {
    label: 'YTD',
    getDate: () => {
      const yearStart = new Date(`${new Date().getFullYear()}-01-01`);
      return { from: yearStart, to: new Date() };
    }
  }
];
