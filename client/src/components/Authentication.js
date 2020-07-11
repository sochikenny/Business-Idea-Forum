class Authentication {
    constructor() {
        this.loggedIn = false;

    }
    loggedIn() {
        return this.loggedIn;
    }
}

export default new Authentication();