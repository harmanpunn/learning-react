import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://78e72bb2db90401ea4f1f0e7457f8ab5@sentry.io/1724574"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
