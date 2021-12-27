module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36380e7c5164395199a1b6697bb40cf4'),
  },
});
