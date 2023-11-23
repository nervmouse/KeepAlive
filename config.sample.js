module.exports = {
  sites: [
    {
      name: "test server",
      url: "http://127.0.0.1:3040",
      interval: 60000,
      run: {
        base_dir: "/user/home/test",
        cmd: "npm start",
      },
    },
    {
      name: "api server",
      url: "http://127.0.0.1:8000/api",
      interval: 60000,
      run: {
        base_dir: "D:\\Server\\API",
        cmd: "run.bat",
      },
    },
  ],
};
