// declare our settings
// const apiKey = "23357829-9b7269d284a8f7fd567a2b936";
// const endpointURL = "https://pixabay.com/api/?key=";
// // const parameters = "&q=cute+dog";

// declare our elements
const result = document.getElementById("result");

$.ajax({
    type: "GET",
    url: "https://uselessfacts.jsph.pl/random.json?language=en",
    success: (data) => {
        console.log(data.text);
    },
    error: (error) => {
        console.log("there's a problem");
        console.log(error);
    }
});
