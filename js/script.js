const shell = document.querySelector(".shell").querySelector("p");
const first = shell.querySelector(".first")
const second = shell.querySelector(".second")
const third = shell.querySelector(".third")
const line1 = "nugil offers consultancy within the"
const line2 = "platform engineering area; architecture,"
const line3 = "design, implementation, onboarding"
const lines = [line1, line2, line3]

const tech = ['kubernetes', 'automation', 'infrastructure as code', 'gitops', 'containerization', 'ci/cd', 'cloud native', 'immutable infrastructure',
              'pipelines', 'autoscaling']
const cursor = "\u2589"
doIt()
async function doIt() {
    prompt(shell, true)
    
    for(let j = 0; j<lines.length; j++) {
        await printLine(lines[j], shell)
        await sleep(200);
        prompt(shell)
        await sleep(200);
    }

    prompt(shell)
    i = 0
    while(true) {
        await printLine(tech[i], shell)
        await sleep(3000);
        await removeLine(tech[i].length + 2, shell)
        await sleep(1000);
        i = (i + 1) % tech.length
    }
}


async function printLine(line, elem) {
    full = "# " + line
    for (let i = 0; i < full.length; i++) {
        let rand = Math.floor(Math.random() * 150)
        await sleep(20 + rand)
        elem.textContent = elem.textContent.replace(cursor, full[i] + cursor)
    }

}
async function removeLine(len, elem) {
    for(let i=0; i<len;i++) {
        elem.textContent = elem.textContent.substr(0, elem.textContent.length - 2) + cursor;
        await sleep(50)
    }
}
async function sleep(t) {
    await new Promise(r => setTimeout(r, t));
}
function prompt(elem, noNewLine) {
    elem.textContent = elem.textContent.replace(cursor, '')
    if(!noNewLine) {
        elem.textContent += "\r\n"
    }
    elem.textContent += "$> " + cursor
}
