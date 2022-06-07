module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION"),
      params: {
        Bucket: env("AWS_BUCKET"),
      },
    },
  },

  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_EMAIL_FROM"),
        defaultReplyTo: env("SENDGRID_EMAIL_TO"),
      },
    },
  },
  menus: {
    config: {
      maxDepth: 0,
    },
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::new.new",
          modelName: "news",
          fuzzysortOptions: {
            threshold: -600,
            limit: 5,
            keys: [
              {
                name: "title",
              },
            ],
          },
        },
        {
          uid: "api::service.service",
          modelName: "services",
          fuzzysortOptions: {
            threshold: -600,
            limit: 5,
            keys: [
              {
                name: "title",
              },
            ],
          },
        },
      ],
    },
  },
});
