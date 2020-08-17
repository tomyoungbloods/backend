module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: 'localhost',
        port: '3306',
        database: 'admin',
        username: 'admin-baboon',
        password: '8pL1jZe$2M',
      },
      options: {
        ssl: false,
      },
    },
  },
});
  // upload: {
  //   provider: 'aws-s3',
  //   providerOptions: {
  //     accessKeyId: env('AKIAIL4KMBGDHPMXTYQQ'),
  //     secretAccessKey: env('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'),
  //     region: env('eu-west-3'),
  //     params: {
  //       Bucket: env('baboon-tutorial'),
  //     },
  //   },
  // },


