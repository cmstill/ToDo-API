const colors = [
	{ red: "#ff0000" },
	{ green: "#00ff00" },
	{ blue: "#0000ff" }
];

 const middleware = () => (req, res, next) => {
 	 if (req.body && req.body.color.toLowerCase() === 'red') {
 		 req.body.hexColor = colors[0];
 	 } else if (req.body && req.body.color.toLowerCase() === 'green') {
 		 req.body.hexColor = colors[1];
	 } else if (req.body && req.body.color.toLowerCase() === 'blue') {
 		 req.body.hexColor = colors[2];
	 } 
 	 next();
  };// todo: fix this.  currently does not remove hexcolor property when color changed from one of these options 

 export default middleware;
