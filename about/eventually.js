const delay = 45;
const tries = 30;

module.exports = async (...params) => {
    let [page, verify] = params;
    if (verify === undefined) {
        verify = page;
        page = undefined;
    }
    return new Promise(async (resolve, reject) => {
        let credit = tries;
        const tryNow = async () => {
            try {
                await verify();
                resolve();
            } catch (error) {
                credit--;
                if (credit === 0) {
                    if (!!page) {
                        console.log('FAILURE\nactual body:', await page.html());
                    }
                    reject(error);
                } else {
                    setTimeout(tryNow, delay);
                }
            }
        };
        await tryNow();
    });
};
