var form = document.getElementById('contactform')
form.addEventListener('submit', function(e){
    e.preventDefault();
    var alert = document.querySelector('.alert');
    var data = new FormData(e.target);
    fetch(e.target.action, {
        method: e.target.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(()=>{
        document.getElementById('alertmsg').innerText = "Message Send Successfully"
        alert.classList.add('alert-success');
        alert.classList.add('show');
        form.reset();
    }).catch(()=>{
        document.getElementById('alertmsg').innerText = "Message Sending Failed"
        alert.classList.add('alert-danger');
        alert.classList.add('show');
    })
});