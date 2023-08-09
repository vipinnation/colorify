class Colorify {
  public static success(args: any) {
    console.log(
      "\x1b[32m",
      `[${new Date().toLocaleString()}] [SUCCESS]`,
      args,
      "\x1b[0m"
    );
  }

  public static error(args: any) {
    console.log(
      "\x1b[31m",
      `[${new Date().toLocaleString()}] [ERROR]`,
      args,
      "\x1b[0m"
    );
  }

  public static warn(args: any) {
    console.log(
      "\x1b[33m",
      `[${new Date().toLocaleString()}] [WARN]`,
      args,
      "\x1b[0m"
    );
  }

  public static log(args: any) {
    console.log(`[${new Date().toLocaleString()}] [LOG]`, args, "\x1b[0m");
  }
}

export const Logger = Colorify;
