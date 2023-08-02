class Colorify {
  static success(msg: string) {
    console.log("\x1b[32m", `[${new Date().toLocaleString()}] [SUCCESS]`, msg);
  }

  static error(msg: any) {
    console.log("\x1b[31m", `[${new Date().toLocaleString()}] [ERROR]`, msg);
  }

  static warn(msg: any) {
    console.log("\x1b[33m", `[${new Date().toLocaleString()}] [WARN]`, msg);
  }

  static log(msg: any) {
    console.log(`[${new Date().toLocaleString()}] [LOG]`, msg);
  }
}

const Logger = Colorify;
export default Logger;
