module.exports = {
  sites: [
    {
      name: "holmes server",
      url: "http://127.0.0.1:3040/api",
      interval: 60000,
      run: {
        base_dir: "D:\\server\\holmes\\server",
        cmd: "run.bat",
      },
    },
    {
      name: "oneapi server",
      url: "http://127.0.0.1:3000/api",
      interval: 60000,
      run: {
        base_dir: "D:\\Server\\OneAPI2",
        cmd: "run.bat",
      },
    },
  ],
};
