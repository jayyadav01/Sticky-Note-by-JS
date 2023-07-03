let button = document.querySelector('#add_note');
let close = document.querySelector('i');
let modal = document.querySelector('#modal');
let note = document.querySelector('.note');

button.onclick = () =>
{
    modal.style.display = 'block';
}

close.onclick = () =>
{
    modal.style.display = 'none';
}

if(note.classList.contains('note'))
{
    note.classList.remove('note');
}

modal.addEventListener('keypress', function (event)
{
    if(event.key == 'Enter')
    {
        event.preventDefault();
        modal.style.display = 'none';
        note.classList.add('note');
        
        let text = document.createElement("h2");
        text.innerHTML = event.target.value;
        document.querySelector('#all_notes .note .details').appendChild(text);

        event.target.value = '';
    }
})