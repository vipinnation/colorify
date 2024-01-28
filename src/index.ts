class Colorify {
  public static success(...props: any) {
    console.log(
      "\x1b[32m",
      `[${new Date().toLocaleString()}] [SUCCESS]`,
      ...props,
      "\x1b[0m"
    );
  }

  public static error(...props: any) {
    console.log(
      "\x1b[31m",
      `[${new Date().toLocaleString()}] [ERROR]`,
      ...props,
      "\x1b[0m"
    );
  }

  public static warn(...props: any) {
    console.log(
      "\x1b[33m",
      `[${new Date().toLocaleString()}] [WARN]`,
      ...props,
      "\x1b[0m"
    );
  }

  public static log(...props: any) {
    console.log(`[${new Date().toLocaleString()}] [LOG]`, ...props, "\x1b[0m");
  }
} 

export const Logger = Colorify;
