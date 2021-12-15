const $ = id => document.getElementById(id);

window.addEventListener('load', function(){
    const t = $('title');
    const r = $('calification');
    const a = $('awards');
    const d = $('date');
    const l = $('length');
    const g = $('genre');
    const formMovies = $('moviesForm');

    t.focus()
    /* Title */
    t.addEventListener('blur', () => {
        if(!t.value.trim()){
            t.classList.add('is-invalid');
            $('warning-title').innerHTML = 'Debes poner un nombre'
        } else {
            t.classList.remove('is-invalid');
            t.classList.add('is-valid');
            warning.innerHTML = null;
        }
    })

    /* Rating */

    r.addEventListener('blur', () => {
        if(!r.value.trim()){
            r.classList.add('is-invalid');
            $('warning-rating').innerHTML = 'Debes poner una calificación'
        } else if (r.value.trim() < 0 || r.value.trim() > 10) {
            r.classList.add('is-invalid');
            $('warning-rating').innerHTML = 'Debe ser entre 0 y 10'
        } else {
            r.classList.remove('is-invalid');
            r.classList.add('is-valid');
            $('warning-rating').innerHTML = null;
        }
    })

    /* Awards */

    a.addEventListener('blur', () => {
        if(!a.value.trim()){
            a.classList.add('is-invalid');
            $('warning-awards').innerHTML = 'Debes poner los premios recibidos';
        } else {
            a.classList.remove('is-invalid');
            a.classList.add('is-valid');
            $('warning-awards').innerHTML = null;
        }
    })

    /* Date */

    d.addEventListener('blur', () => {
        if(!d.value.trim()){
            d.classList.add('is-invalid');
            $('warning-date').innerHTML = 'Debes poner una fecha';
        } else {
            d.classList.remove('is-invalid');
            d.classList.add('is-valid');
            $('warning-date').innerHTML = null;
        }
    })

    /* Length */
    
    l.addEventListener('blur', () => {
        if(!l.value.trim()){
            l.classList.add('is-invalid');
            $('warning-rating').innerHTML = 'Debes poner duración de la película';
        } else if (l.value.trim() < 60 || l.value.trim() > 360) {
            l.classList.add('is-invalid');
            $('warning-rating').innerHTML = 'Debe ser entre 0 y 10';
        } else {
            l.classList.remove('is-invalid');
            l.classList.add('is-valid');
            $('warning-rating').innerHTML = null;
        }
    })

    /* Genre */

    g.addEventListener('blur', () => {
        if(!g.value.trim()){
            g.classList.add('is-invalid');
            $('warning-title').innerHTML = 'Debes poner un nombre'
        } else {
            g.classList.remove('is-invalid');
            g.classList.add('is-valid');
            warning.innerHTML = null;
        }
    })

    /* Form */

    formMovies.addEventListener('submit', e => {
        let elementsForm = $('form').elements;
        let error = false;
    
        for (let i = 0; i < elementsForm.length - 1; i++) {
            e.preventDefault();

            if(!elementsForm[i].value){
                elementsForm[i].classList.add('is-invalid')
                $('errores').innerHTML = 'Los campos señalados son obligatorios';
                $('errores').classList.add('alert-warning');
                error = true
            }
        }
    
        if(!error){
            $('form').submit()
            alert('La película se guardó satisfactoriamente')
        }
    })
}) 