// ecosystem.config.js
module.exports = {
    apps: [{
      name: "my-nest-app",
      script: "./dist/src/main.js", // 或绝对路径 "/Volumes/mycode/.../dist/main.js"
      cwd: "/Volumes/mycode/mySRM_2025/REACT-CRM/mycrm_api_v6.2", // 指定工作目录
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    }]
  };