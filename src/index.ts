class Logger {
  static success(msg: string) {
    console.log("\x1b[32m", `[${new Date().toLocaleString()}] [SUCCESS]`, msg);
  }

  static error(msg: string) {
    console.log("\x1b[31m", `[${new Date().toLocaleString()}] [ERROR]`, msg);
  }

  static warn(msg: string) {
    console.log("\x1b[33m", `[${new Date().toLocaleString()}] [WARN]`, msg);
  }

  static log(msg: string) {
    console.log(`[${new Date().toLocaleString()}] [LOG]`, msg);
  }
}

export default Logger;
