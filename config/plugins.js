module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
    },
  },
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "rayokdesign@gmail.com",
        defaultReplyTo: "rayokdesign@gmail.com",
        testAddress: "rayokdesign@gmail.com",
      },
    },
  },
});
