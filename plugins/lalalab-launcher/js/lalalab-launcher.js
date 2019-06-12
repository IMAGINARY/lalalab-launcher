IMAGINARY.AppLauncher.registerRemoteLauncher('lalalab-launcher', (function () {
    // eslint-disable-next-line no-underscore-dangle,no-unused-vars
    /**
     * Init the launcher
     *
     * This method will be called by the appLauncher when it starts.
     *
     * @param {AppLauncher} appLauncher
     *  The AppLauncher instance
     */
    function init(appLauncher) {
    }

    /**
     * Launch an app
     *
     * This method will be called by the appLauncher when the user launchs an app
     * associated with this launcher.
     *
     * @param {object} appCfg
     *  Configuration of the app to launch
     * @param {string} lang
     *  Language to launch the app with
     * @param {function} onClose
     *  Callback to call if the app decides to close on its own
     */
    // eslint-disable-next-line no-unused-vars
    function run(appCfg, lang, onClose) {
        window.location.href = appCfg.lalalabDemoHref;
    }

    /**
     * Close the currently running app
     *
     * This method will be called by the appLauncher when the app needs to close
     *
     */
    function close() {
    }

    return {
        init,
        run,
        close,
    };
}()));
