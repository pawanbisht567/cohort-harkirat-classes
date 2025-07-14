export class PubSubManager {

    private static instance: PubSubManager;

    private constructor() {}

    public static getInstance(): PubSubManager {
        if(!this.instance) {
            this.instance = new PubSubManager();
        }
        return this.instance;
    }

}

export const pubSubIntance = PubSubManager.getInstance();