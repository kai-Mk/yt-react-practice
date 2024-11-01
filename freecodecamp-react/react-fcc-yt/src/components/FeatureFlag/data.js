const dummyApiResponse = {
    showLightAndDarkMode: false,
    showTicTacToe: true,
    showRandomColorGenerator: true,
    showAccordion: true,
    showTreeView: true,
};

const featuresFlagsDataService = () => {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Some error occurred! Please try again");
    });
};

export default featuresFlagsDataService;
