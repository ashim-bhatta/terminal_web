const input_field = document.getElementById('command')
const art = document.getElementById('art')
const container = document.getElementById('container')
const body = document.getElementById('body')

input_field.focus()

const help = [
  "<div class='help'><span class='glow'>whois</span>       <span class='main_text'> Who is Ashim Bhatta? </span></div>",
  "<div class='help'><span class='glow'>whoami</span>   <span class='main_text'> Who are you? </span></div>",
  "<div class='help'><span class='glow'>projects</span>   <span class='main_text'> Please! Don't copy my code </span></div>",
  "<div class='help'><span class='glow'>socials</span>   <span class='main_text'> see my social life (which I don't have) </span></div>",
  "<div class='help'><span class='glow'>history</span>   <span class='main_text'> What have you done? </span></div>",
  "<div class='help'><span class='glow'>help</span>   <span class='main_text'> Seriously, you don't know </span></div>",
  "<div class='help'><span class='glow'>email</span>   <span class='main_text'> Please Don't email me! </span></div>",
]

const about_me = `
<pre class="result">
  Ashim is a Knowledgeable Front End Developer
  specializing in collaborating with customers 
  to gather requirements, produce plans, and 
  improve designs for usability and functionality.
</pre>
`

const whoami = `
<pre class="result">
  The paradox of “Who am I?” is: we never know, but, we constantly find out.
</pre>
  `

const socials = [
  "<div class='social'><span>github</span>   <a href='https://github.com/ashim-bhatta' target='_blank' class='link'> github/ashim-bhatta </a></div>",
  "<div class='social'><span>linkedin</span>   <a href='https://www.linkedin.com/in/ashim-bhatta-76122b183/' target='_blank' class='link'> linkedin/ashim-bhatta </a></div>",
  "<div class='social'><span>instagram</span>   <a href='https://instagram.com/ashim_bhatta' target='_blank' class='link'> instagram/ashim_bhatta </a></div>",
]
const history = []
var history_for_record = []
var history_index = 0
const projects = [
  `
  <pre class="result">
    Gotcha here is nothing to see.
  </pre>
  `,
]

const handelFocus = () => {
  input_field.focus()
}

const handleShowText = (text) => {
  return `
          <div class="input_line">
            <p>Ashim.bhatta@gmail.com:~$ </p>
            <span id="command" class="command" >${text}</span>
          </div>
        `
}

input_field.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    history_index = 0
    event.preventDefault()
    const command = input_field.innerHTML
    container.innerHTML += handleShowText(input_field.innerHTML)
    input_field.innerHTML = ''

    if (command.startsWith('cd')) {
      const dir = command.split(' ')[1]
      if (dir === '..') {
        window.history.back()
      } else {
        window.location.href = dir
      }
    } else {
      switch (command.toLowerCase()) {
        case 'ls':
          container.innerHTML += help.join('\n')
          break
        case 'help':
          container.innerHTML += help.join('\n')
          break
        case 'whois':
          container.innerHTML += about_me
          break
        case 'whoami':
          container.innerHTML += whoami
          break
        case 'projects':
          container.innerHTML += projects.join('\n')
          break
        case 'project':
          container.innerHTML += projects.join('\n')
          break
        case 'socials':
          container.innerHTML += socials.join('\n')
          break
        case 'social':
          container.innerHTML += socials.join('\n')
          break
        case 'email':
          container.innerHTML += `<pre class="result">
ashim.bhatta@gmail.com
        </pre>`
          break
        case 'clear':
          container.innerHTML = ''
          break
        case 'cls':
          container.innerHTML = ''
          break
        case 'history':
          container.innerHTML += history.join('\n')
          break
        case '':
          break
        case 'exit':
          window.close()
          break
        default:
          container.innerHTML += `
          <p class="invalid">
            Command not found. For a list of commands, type <span class="glow">'help'</span>.
          </p>
          `
          break
      }
    }
    history_for_record.push(command)
    history.push(`
    <p class="history">${command}</p>
  `)
  }

  if (event.key === 'ArrowUp') {
    console.log(history_for_record, history_index)

    history_index =
      history_index == 0 ? history_for_record.length - 1 : history_index - 1
    input_field.innerHTML = history_for_record[history_index]
  }
  if (event.key === 'ArrowDown') {
    // console.log(history_for_record, history_index)
    // if (history_for_record.length >= history) {
    //   console.log('//////////////////')
    //   history_index =
    //     history_index == 0 ? history_for_record.length - 1 : history_index + 1
    //   input_field.innerHTML = history_for_record[history_index]
    // }
  }
})
