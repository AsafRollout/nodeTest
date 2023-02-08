// Import Rollout SDK
const Rox = require('rox-node');

// Create a Roxflag in the flags container class
const flags = {
  enableTutorial: new Rox.Flag(),
  titleColors: new Rox.RoxString('White', ['White', 'Blue', 'Green', 'Yellow']),
  titleSize: new Rox.RoxNumber(12, [12, 14, 18, 24])
};

async function initRollout() {
  const options = {debugLevel: 'verbose'}

  // Register the flags with Rollout
  Rox.register('', flags);

  // Setup the Rollout key
  await Rox.setup('63e2e358e8fe994d8974b3e0', options);

  // Boolean flag example
  if (flags.enableTutorial.isEnabled()) {
    console.log('enableTutorial flag is true');
    // TODO:  Put your code here that needs to be gated
  }

  // string flag example
  console.log('Title color is ' + flags.titleColors.getValue());

  // number flag example
  console.log('Title size is ' + flags.titleSize.getValue());
}

initRollout().then(function() {
  console.log('Done loading Rollout');
});