module.exports = {
  sites: [
    {
      name: "holmes server",
      url: "http://127.0.0.1:3040/api",
      interval: 5000,
      run: {
        base_dir: "D:\\projects\\holmes\\server",
        cmd: "run.bat",
        //cmd: "start cmd.exe /K run.bat",
      },
    },
  ],
};