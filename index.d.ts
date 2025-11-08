declare module '@apiverve/callingcode' {
  export interface callingcodeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface callingcodeResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class callingcodeWrapper {
    constructor(options: callingcodeOptions);

    execute(callback: (error: any, data: callingcodeResponse | null) => void): Promise<callingcodeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: callingcodeResponse | null) => void): Promise<callingcodeResponse>;
    execute(query?: Record<string, any>): Promise<callingcodeResponse>;
  }
}
