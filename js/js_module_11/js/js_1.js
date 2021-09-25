
const delay = ms => {
  
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  
 
  delay(3500).then(logger);
  delay(700).then(logger); 
  delay(1000).then(logger);