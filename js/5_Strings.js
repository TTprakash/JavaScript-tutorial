console.log("Strings: Properties, Methods & Template Literals in JavaScript");


let act="Prakash";
let name="<p>abc asfa asdff</p>";
console.log(name);
name=name.concat("<p>asdsa faa asdff</p>");
console.log(name);

let name2=" Rakesh";
let name3=" Rashmi";

let myHTML=`Hello ${act}
            <h4>this is from 5_strings file</h4>
            <${name2} ${name3} `;


document.body.innerHTML=myHTML;

