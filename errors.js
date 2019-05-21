try {
    eval("alert('Hello)");
   // Missing ' will produce an error
   }
   catch(err) {
    console.log((err.name));
   }