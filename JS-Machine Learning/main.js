window.addEventListener("load", function() {
    const net = new brain.NeuralNetwork();
  
    const trainingData = [
      { input: [0, 1], output: [1] },
      { input: [1, 0], output: [1] },
      { input: [1, 1], output: [0] },
      { input: [0, 0], output: [0] },
    ];
  
    net.train(trainingData); // Corrected typo: changed "traingData" to "trainingData"
  
    const result = brain.likely([1, 1], net); // Assuming you have imported the 'brain' library correctly
  
    document.getElementById("output").innerHTML = "The prediction is " + result;
  });
  