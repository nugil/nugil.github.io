const shell = document.querySelector(".shell").querySelector("p");
const first = shell.querySelector(".first")
const second = shell.querySelector(".second")
const third = shell.querySelector(".third")
const line1 = "nugil offers consultancy within the"
const line2 = "platform engineering area; architecture,"
const line3 = "design, implementation, onboarding"


const tech = ['kubernetes', 'infrastructure as code', 'gitops', 'containerization', 'cloud native', 'immutable infrastructure',
              'pipelines', 'autoscaling']
doIt()
async function doIt() {

    prompt(shell, true)
    await printLine(line1, shell)
    await sleep(200);

    prompt(shell)
    await sleep(200);
    await printLine(line2, shell)
    await sleep(200);
    prompt(shell)
    await printLine(line3, shell)
    await sleep(200);
    prompt(shell)
    await sleep(200);
    prompt(shell)

    i = 0
    while(true) {
        await printLine(tech[i], shell)
        await sleep(3000);
        await removeLine(tech[i].length + 2, shell)
        await sleep(1000);
        i = (i + 1) % tech.length
    }
/*    prompt(second)
    await sleep(200);
    await printLine(line2, second)
    await sleep(200);
    prompt(third)
    await printLine(line3, third)
*/
}


async function printLine(line, elem) {
    full = "# " + line
    for (let i = 0; i < full.length; i++) {
        let rand = Math.floor(Math.random() * 150)
        await sleep(20 + rand)
        elem.textContent += full[i];
    }

}
async function removeLine(len, elem) {
    for(let i=0; i<len;i++) {
        elem.textContent = elem.textContent.substr(0, elem.textContent.length - 1);
        await sleep(50)
    }
}
async function sleep(t) {
    await new Promise(r => setTimeout(r, t));
}
function prompt(elem, noNewLine) {
    if(!noNewLine) {
        elem.textContent += "\r\n"
    }
    elem.textContent += "$> "
}