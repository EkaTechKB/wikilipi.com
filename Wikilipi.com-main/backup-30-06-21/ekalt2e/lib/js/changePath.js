	function chgPath(){ 
  
		var newPath = "";
		// save the original path after removing the file name
		var pathPrefix = "";
		var pathPrefix = window.location.pathname;
		var pathPrefix = pathPrefix.substr(0, pathPrefix.lastIndexOf("/"));;
		var origPath = pathPrefix
		
		// Determine the current environment (http or local)
		var currProto = window.location.protocol;
		if  (currProto == "http:" || currProto == "https:") {
			newPath = "http://ekalipi.org" + "/ekashr" ;
		} else {	
			var pathPrefix = pathPrefix.substr(0, pathPrefix.lastIndexOf("/"));
			var pathPrefix = pathPrefix.substr(0, pathPrefix.lastIndexOf("/"));
			var newPath    = pathPrefix + "/ekashr";
		}
		// <script>
			if (typeof(Storage)!=="undefined") {
				localStorage.setItem("origPath", origPath);
				localStorage.setItem("newPath", newPath);
				// localStorage.origPath= origPath;
				// localStorage.newPath= newPath;
			} else {
				document.getElementById("notes").innerHTML="Sorry, your browser does not support web storage...";
			}
		// </script>
		
		document.getElementById("myLink").href = newPath;
		var rtnarray = [newPath, origPath];
		return rtnarray;
	}