// code your solution here
     const record = [
      {year: "2015", result: "W"},
      {year: "2014", result: "N/A"},
      {year: "2013", result: "L"},
     ] 

     function superbowlWin(arr) {
      const win = arr.find(obj => obj.result === "w")
      return win ? win.year : undefined;
     }