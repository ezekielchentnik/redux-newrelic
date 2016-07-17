import { errorReporter, crashReporter } from 'redux-reporter';

const report = (error) => {
    try {
        window.NREUM.noticeError(error);
    } catch (err) {
        console.error(err);
    }
};

export const newrelicCrashReporter = crashReporter(report);

export default errorReporter(report);
