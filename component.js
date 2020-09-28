const { exec } = require('child_process');

/*
Structure of your command should be :
node component <component-name> <component-name> ...
*/

let args = process.argv;

args.shift();
args.shift();

args = args.map(arg => `ng g c components/${arg} --skipTests`); 
let = cmd = args.join(' && ');

exec(cmd, (error, stdout, stderr) => {
    if (error)
        console.log(`error: ${error.message}`);
    if (stderr)
        console.log(`stderr: ${stderr}`);

    console.log(`stdout: ${stdout}`);
});