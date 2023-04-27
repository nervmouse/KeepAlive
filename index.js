const { spawn } = require("child_process");
const axios=require("axios")
const config = require("./config.js")

const log=(...args)=>{
  console.log(new Date().toISOString(), ...args);
}

for (const task of config.sites){
  log(task)
  if (!task.interval) continue
  const timeHdl=setInterval(async () => {
    try{
      const res = await axios.get(task.url);
      log("alive : ", task.url);
      //console.log(res)
    }catch(e){
      log('server down:',(task.name || task.url))
      try{
        log("staring : ", task.run.base_dir, task.run.cmd);
        //start cmd.exe /K run.bat
        spawn("start", [ task.run.cmd], {
          cwd: task.run.base_dir,
          shell: true,
        });
      }catch(e){
        log('start failed', e)
      }
      
    }
  },task.interval);
}
