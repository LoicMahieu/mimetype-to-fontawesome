declare module 'mimetype-to-fontawesome' {
  type Options = {
    prefix?: string;
  }
  function mimetype2fa(mimetype: string): string;
  function factory (options: Options): mimetype2fa;
  export default factory;
};
