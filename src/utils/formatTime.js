import moment from 'moment';

export const MomentTimeFromNow = (time) =>
    moment(time).startOf('hour').fromNow();
