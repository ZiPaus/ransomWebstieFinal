function fiftyWords() {
	var wordArray= new Array("Priam","Achilles","Greeks","Warrior","Sea","Wars","Battles","Hector","Kill","Patroclus","Trojans","Triumph","Disrespect","Myrmidons","Armour","Swords","Pain","Chariot","Royal","Devastatingly","Void","Beloved","Friend","Furious","Torn","Unimaginable","Aged","Father","Murderer","Son","Past","Present","Enemies","Exchange","Hatred","Understanding","Youth","Pities","Age","Mourning","Somax","Relationship","Priam","Achilles","Greeks","Warrior","Sea","Wars","Battles","Hector");
	var random = wordArray[Math.floor(Math.random() * wordArray.length)];
	document.getElementById("storyInput").innerHTML= random ;
}