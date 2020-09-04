// Create Custom Debug File
var globalDebugInfo;
var debugFile = File("~/Documents/myDebug.ntp");
if(!debugFile.exists) {
	debugFile.open("w");
	debugFile.write("Line 1 Stuff\nLine 2 Stuff\nLine 3 Stuff");
	globalDebugInfo = "Line 1 Stuff\nLine 2 Stuff\nLine 3 Stuff";
} else {
	debugFile.open("r");
	globalDebugInfo = debugFile.read();
}
debugFile.close();

// lets throw the information we read into edittext elements
var window = new Window("palette", "customDebug", undefined);
window.orientation = "column";
var editTextOne = window.add("edittext", undefined, globalDebugInfo.split("\n")[0]);
editTextOne.characters = 25;
var editTextTwo = window.add("edittext", undefined, globalDebugInfo.split("\n")[1]);
editTextTwo.characters = 25;
var editTextThree = window.add("edittext", undefined, globalDebugInfo.split("\n")[2]);
editTextThree.characters = 25;
var updateButton = window.add("button", undefined, "Update");

window.center();
window.show();

updateButton.onClick = function() {
	debugFile.open("w");
	debugFile.write(editTextOne.text+"\r"+editTextTwo.text+"\r"+editTextThree.text);
	debugFile.close();

}